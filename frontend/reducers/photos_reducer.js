import merge from 'lodash/merge';

const photosReducer = (state = [], action) => {
	Object.freeze(state);
	switch (action.type) {
		case "PHOTOS_RECEIVED":
			
			break;
		case "PHOTO_RECEIVED":
			break;
		
		case "PROFILE_PHOTOS_RECEIVED":
			break;

		case "HOMEFEED_RECEIVED":
			break;

		default:
			return state;
	}
};

export default photosReducer;
