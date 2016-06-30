const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');

const PhotoStore = new Store(Dispatcher);
let _photos = {};
let _profilePhotos = {};

PhotoStore.all = function () {
	return Object.assign({}, _photos);
};

PhotoStore.profile = function () {
	return Object.assign({}, _profilePhotos);
};

PhotoStore._resetPhotos = function (photos) {
	_photos = {};
	photos.forEach( (photo) => {
		_photos[photo.id] = photo;
	} );
	PhotoStore.__emitChange();
};

PhotoStore._resetProfile = function (profilePics) {
	_profilePhotos = {};
	profilePics.forEach( (profile) => {
		_profilePhotos[profile.id] = profile;
	} );
	PhotoStore.__emitChange();
};

PhotoStore._resetSinglePhoto = function (photo) {
	_photos[photo.id] = photo;
	PhotoStore.__emitChange();
};

PhotoStore.find = function (photoId) {
	return _photos[photoId];
};

PhotoStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case 'PHOTO_RECEIVED':
			PhotoStore._resetSinglePhoto(payload.photo);
			break;
		case 'PHOTOS_RECEIVED':
			PhotoStore._resetPhotos(payload.photos);
			break;
		case 'PROFILE_PHOTOS_RECEIVED':
			PhotoStore._resetProfile(payload.profile);
			break;
	}
};

module.exports = PhotoStore;
