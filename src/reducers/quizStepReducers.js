import { 
    GET_QUIZ_STEP,
    INCREASE_QUIZ_STEP,
    INCREASE_QUIZ_SCORE
} from '../actions/types';

const INITIAL_STATE = {
    quizStep: 0,
    score: 0
}

export default (state = INITIAL_STATE, action) => {
    console.log(action.type);
    switch(action.type) {
        case INCREASE_QUIZ_STEP: 
            console.log('Increase Quiz Step ran');
            return { ...state, quizStep: state.quizStep + 1};
        case INCREASE_QUIZ_SCORE: 
            return { ...state, score: state.score + 1};
        default:
            return state;
    }
}