const Dispatcher = require('../dispatcher/dispatcher.js');
const PhotoApiUtil = require('../util/photo_api_util.js');

const PhotoActions = {
	fetchAllPhotos () {
		PhotoApiUtil.fetchAllPhotos(PhotoActions.receiveAllPhotos);
	},
	uploadPhoto (photo) {
		PhotoApiUtil.uploadPhoto(photo, PhotoActions.receivePhoto);
	},
	receiveAllPhotos (photos) {
		Dispatcher.dispatch({
			actionType: "PHOTOS_RECEIVED",
			photos: photos
		});
	},
	receivePhoto (photo) {
		Dispatcher.dispatch({
			actionType: "PHOTO_RECEIVED",
			photo: photo
		});
	}
};

module.exports = PhotoActions;;
