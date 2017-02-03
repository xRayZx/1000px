import { createStore, applyMiddleware } from 'redux';
import reducer from '../redux/rootReducer.js';

import photosMiddleware from '../middleware/photos_middleware.js';

const Store = createStore(reducer);

let configureStore = (preloadedState = {}) =>( 
	createStore(
		reducer,
		preloadedState,
		applyMiddleware(photosMiddleware);
	)
);

module.exports = Store;
