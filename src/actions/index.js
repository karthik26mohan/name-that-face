import dog from '../apis/Dog';
import { 
    FETCH_ALL_BREEDS,
    PICK_10_BREEDS,
    GET_BREED_IMAGES,
    GET_4_OPTIONS,
    SET_USER_SELECTED_BREED,
    INCREASE_QUIZ_STEP,
    INCREASE_QUIZ_SCORE,
    RESET_QUIZ
} from '../actions/types';

export const fetchAllBreeds = () => async dispatch => {
    const response = await dog.get('/breeds/list/all');
    dispatch({ type:FETCH_ALL_BREEDS, payload: response.data.message });
    dispatch({ type: PICK_10_BREEDS, payload: ''});
}

export const pick10Breeds = () => {
    return {
        type: PICK_10_BREEDS
    };
}

export const getBreedImages = (breed) => async dispatch => {
    const response = await dog.get(`/breed/${breed}/images/random/3`);
    console.log(response);
    dispatch({ type: GET_BREED_IMAGES, payload: response.data.message });
}

export const get4Options = (currentStep) => {
    return {
        type: GET_4_OPTIONS,
        payload: currentStep
    }
}

export const increaseQuizStep = () => {
    return {
        type: INCREASE_QUIZ_STEP
    }
}

export const increaseQuizScore = () => {
    return {
        type: INCREASE_QUIZ_SCORE
    }
}

export const setUserSelectedBreed = (userSelectedBreed) => {
    return {
        type: SET_USER_SELECTED_BREED,
        payload: userSelectedBreed
    }
}

export const resetQuiz = () => {
    return {
        type: RESET_QUIZ
    }
}