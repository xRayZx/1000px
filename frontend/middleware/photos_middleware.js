import { fetchAllPhotos } from '../util/photo_api_util.js';
import { receiveAllPhotos, FETCH_ALL_PHOTOS } from '../actions/photo_actions.js';

export default photosMiddleware = ({ getState, dispatch }) => next => action => {
	const allPhotosSuccess = data => dispatch(receiveAllPhotos(data));
	const error = e => console.log(e.responseJSON);

	switch (action.type) {
		case FETCH_ALL_PHOTOS:
			fetchAllPhotos(allPhotosSuccess, error);
			return next(action);
		default:
			return next(action);
	}
};
