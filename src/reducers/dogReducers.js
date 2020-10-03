import { 
    FETCH_ALL_BREEDS,
    PICK_10_BREEDS,
    GET_BREED_IMAGES
} from '../actions/types';

export default (state = {}, action) => {
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
        default:
            return state;
    }
}

const pick10Breeds = (allBreeds) => {
    console.log('allBreeds: ');
    console.log(allBreeds);
    let tenBreeds = {};
    if(allBreeds) {
        let keys = Object.keys(allBreeds);
        for(let i=0; i<10; i++) {
            let index = Math.floor(Math.random() * keys.length);
            tenBreeds[keys[index]] = allBreeds[keys[index]];
        }
    }
    return tenBreeds;
}