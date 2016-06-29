const Dispatcher = require('../dispatcher/dispatcher.js');
const PhotoApiUtil = require('../util/photo_api_util.js');

const PhotoActions = {
	uploadPhoto (photo) {
		PhotoApiUtil.uploadPhoto(photo, PhotoActions.receivePhoto);
	},
	receivePhoto (photo) {
		Dispatcher.dispatch({
			actionType: "PHOTO_RECEIVED",
			photo: photo
		});
	}
};

module.exports = PhotoActions;;
