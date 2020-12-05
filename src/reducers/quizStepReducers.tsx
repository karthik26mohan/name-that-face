import { Action } from './../models/Action.model';
import { 
    RESET_QUIZ,
    INCREASE_QUIZ_STEP,
    INCREASE_QUIZ_SCORE
} from '../actions/types';

const INITIAL_STATE = {
    quizStep: 1,
    score: 0
}

export default (state = INITIAL_STATE, action: Action) => {
    // console.log(action.type);
    switch(action.type) {
        case INCREASE_QUIZ_STEP: 
            // console.log('Increase Quiz Step ran');
            return { ...state, quizStep: state.quizStep + 1};
        case INCREASE_QUIZ_SCORE: 
            return { ...state, score: state.score + 1};
        case RESET_QUIZ:
            // console.log('in reset_quiz')
            return { ...state, ...INITIAL_STATE };
        default:
            return state;
    }
}