const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const FollowStore = new Store(Dispatcher);

let _index = [];

FollowStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case 'FOLLOW_INDEX_RECEIVED':
			FollowStore._resetIndex(payload.index);
			break;
	}
	FollowStore.__emitChange();
};

FollowStore._resetIndex = function (index) {
	_index = [];
	_index = index;
};

FollowStore.index = function () {
	return _index;
};

module.exports = FollowStore;
