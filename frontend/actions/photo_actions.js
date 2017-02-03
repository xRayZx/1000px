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
	updatePhoto (photo) {
		PhotoApiUtil.updatePhoto(photo, PhotoActions.receivePhoto);
	},
	deletePhoto(photoId) {
		PhotoApiUtil.deletePhoto(photoId, PhotoActions.receiveProfile);
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

export const FETCH_ALL_PHOTOS = "FETCH_ALL_PHOTOS";
export const FETCH_HOMEFEED = "FETCH_HOMEFEED";
export const FETCH_PROFILE_PHOTOS = "FETCH_PROFILE_PHOTOS";
export const UPLOAD_PHOTO = "UPLOAD_PHOTO";
export const UPDATE_PHOTO = "UPDATE_PHOTO";
export const DELETE_PHOTO = "DELETE_PHOTO";
export const PHOTOS_RECEIVED = "PHOTOS_RECEIVED";
export const PHOTO_RECEIVED = "PHOTO_RECEIVED";
export const PROFILE_PHOTOS_RECEIVED = "PROFILE_PHOTOS_RECEIVED";
export const HOMEFEED_RECEIVED = "HOMEFEED_RECEIVED";

export const fetchAllPhotos = () => ({
	type: FETCH_ALL_PHOTOS
});

export const fetchHomeFeed = () => ({
	type: FETCH_HOMEFEED
});

export const fetchProfilePhotos = (profileId) => ({
	type: FETCH_PROFILE_PHOTOS,
	profileId: profileId
});
