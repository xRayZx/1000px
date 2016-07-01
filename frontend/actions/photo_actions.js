const Dispatcher = require('../dispatcher/dispatcher.js');
const PhotoApiUtil = require('../util/photo_api_util.js');

const PhotoActions = {
	fetchAllPhotos () {
		PhotoApiUtil.fetchAllPhotos(PhotoActions.receiveAllPhotos);
	},
	fetchHomeFeed () {
		PhotoApiUtil.fetchHomeFeed(PhotoActions.receiveHomeFeed);
	},
	fetchProfilePhotos (profileId) {
		PhotoApiUtil.fetchProfilePhotos(profileId, PhotoActions.receiveProfile);
	},
	fetchPhoto (photoId) {
		PhotoApiUtil.fetchPhoto(photoId, PhotoActions.receivePhoto);
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
	},
	receiveProfile (profile) {
		Dispatcher.dispatch({
			actionType: "PROFILE_PHOTOS_RECEIVED",
			profile: profile
		})
	},
	receiveHomeFeed (homeFeed) {
		Dispatcher.dispatch({
			actionType: "HOMEFEED_RECEIVED",
			feed: homeFeed
		});
	}
};

module.exports = PhotoActions;;
