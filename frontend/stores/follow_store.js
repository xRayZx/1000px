const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const FollowStore = new Store(Dispatcher);

let _index = [];
let _followerIndex = [];
let _followingIndex = [];

FollowStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case 'FOLLOW_INDEX_RECEIVED':
			FollowStore._resetIndex(payload.index);
			break;
		case 'FOLLOWER_INDEX_RECEIVED':
			FollowStore._resetFollowerIndex(payload.index);
			break;
		case 'FOLLOWING_INDEX_RECEIVED':
			FollowStore._resetFollowingIndex(payload.index);
			break;
	}
	FollowStore.__emitChange();
};

FollowStore._resetIndex = function (index) {
	_index = [];
	_index = index;
};

FollowStore._resetFollowerIndex = function (index) {
	_followerIndex = [];
	_followerIndex = index;
};

FollowStore._resetFollowingIndex = function (index) {
	_followingIndex = [];
	_followingIndex = index;
};

FollowStore.index = function () {
	return _index;
};

FollowStore.followers = function () {
	return _followerIndex;
};

FollowStore.followings = function () {
	return _followingIndex;
};

module.exports = FollowStore;
