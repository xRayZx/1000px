const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js'):

const PhotoStore = new Store(Dispatcher);
let _photos = {};

PhotoStore.all = function () {
};

PhotoStore._getPhoto = function (photo) {

};

PhotoStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case 'PHOTO_RECEIVED':
			PhotoStore._getPhoto(payload.photo);
			break;
		
		default:
			
	}
};

module.exports = PhotoStore;
