import { combineReducers } from 'redux';
import dogReducers from './dogReducers';

export default combineReducers({
    dogState: dogReducers
});