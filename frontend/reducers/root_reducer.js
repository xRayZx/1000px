import { combineReducers } from 'redux';
import photosReducer from './photos_reducer.js';

const rootReducer = combineReducers({
	photos: photosReducer
});

export default rootReducer;
