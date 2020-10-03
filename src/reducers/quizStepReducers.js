import { 
    GET_QUIZ_STEP,
    INCREASE_QUIZ_STEP
} from '../actions/types';

export default (state = 0, action) => {
    console.log(action.type);
    switch(action.type) {
        case INCREASE_QUIZ_STEP: 
            console.log('Increase Quiz Step ran');
            return state + 1;
        default:
            return state;
    }
}