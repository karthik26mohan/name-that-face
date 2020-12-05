import { 
    FETCH_ALL_BREEDS,
    PICK_10_BREEDS,
    GET_BREED_IMAGES, 
    GET_4_OPTIONS,
    SET_USER_SELECTED_BREED
} from '../actions/types';
import { Breeds } from '../models/Breeds.model';
import { DogBreed } from '../models/DogBreed.model';

const initialState: DogBreed = {
    dogBreeds: {},
    tenBreeds: {}
};

export default (state = initialState, action: any) => {
    console.log(action.type);
    switch(action.type) {
        case FETCH_ALL_BREEDS: 
            console.log('FetchAllBreeds ran');
            return { ...state, dogBreeds: action.payload };
        case PICK_10_BREEDS:
            const tenBreeds = pick10Breeds(state.dogBreeds);
            return { ...state, tenBreeds: tenBreeds };
        case GET_BREED_IMAGES:
            return { ...state, breedImages: action.payload };
        case GET_4_OPTIONS:
            const options = pick4Options(state.dogBreeds, state.tenBreeds, action.payload); 
            return { ...state, fourOptions: options.fourOptionsArray, breed: options.correctOption };
        case SET_USER_SELECTED_BREED:
            return { ...state, userSelectedBreed: action.payload }
        default:
            return state;
    }
}

const pick4Options = (allBreeds: Breeds, tenBreeds: Breeds, currentStep: number) => {
    let fourOptionsArray = [];
    // Current Breed String
    const breedKeys = Object.keys(tenBreeds);
    let breedStr = breedKeys[currentStep];
    let correctOption = breedStr; // Camel case it eventually.
    if(tenBreeds[breedStr].length>0){
        correctOption = tenBreeds[breedStr][0] + ' ' + correctOption;
    }
    fourOptionsArray.push(correctOption);

    // Pick 3 more options
    const allBreedKeys = Object.keys(allBreeds);
    for(let i=0; i<3; i++) {
        let randomNumber = Math.floor(Math.random() * allBreedKeys.length);
        let breed = allBreedKeys[randomNumber];
        if(allBreeds[breed].length>0){
            breed = allBreeds[breed][0] + ' ' + breed;
        }
        fourOptionsArray.push(breed);
    }
    return { fourOptionsArray, correctOption };
}

const pick10Breeds = (allBreeds: Breeds) => {
    console.log('allBreeds: ');
    console.log(allBreeds);
    let tenBreeds: Breeds = {};
    if(allBreeds) {
        let keys = Object.keys(allBreeds);
        for(let i=0; i<10; i++) {
            let index = Math.floor(Math.random() * keys.length);
            tenBreeds[keys[index]] = allBreeds[keys[index]];
        }
    }
    return tenBreeds;
}