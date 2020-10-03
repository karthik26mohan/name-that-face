import { combineReducers } from 'redux';
import dogReducers from './dogReducers';
import quizStepReducers from './quizStepReducers';

export default combineReducers({
    dogState: dogReducers,
    quiz: quizStepReducers
});