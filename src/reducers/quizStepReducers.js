import { 
    GET_QUIZ_STEP,
    INCREASE_QUIZ_STEP
} from '../actions/types';

export default (state = 0, action) => {
    console.log(action.type);
    switch(action.type) {
        case INCREASE_QUIZ_STEP: 
            console.log('Increase Quiz Step ran');
            return { ...state, ...state + 1 };
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