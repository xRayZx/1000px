const FollowApiUtil = require('../util/follow_api_util');
const Dispatcher = require('../dispatcher/dispatcher.js');

const FollowAction = {
	fetchIndex () {
		FollowApiUtil.fetchIndex(FollowAction.receiveIndex);
	},
	follow (userId) {
		FollowApiUtil.follow(userId, FollowAction.receiveStatus);
	},
	unfollow (userId) {
		FollowApiUtil.unfollow(userId, FollowAction.receiveStatus);
	},
	status (userId) {
		FollowApiUtil.status(userId, FollowAction.receiveStatus);
	},
	fetchFollowerIndex (userId) {
		FollowApiUtil.fetchFollowerIndex(userId, FollowAction.receiveFollowerIndex)
	},
	fetchFollowingIndex (userId) {
		FollowApiUtil.fetchFollowingIndex(userId, FollowAction.receiveFollowingIndex)
	},
	receiveStatus (profile) {
		Dispatcher.dispatch({
			actionType: "PROFILE_RECEIVED",
			profile: profile
		});
	},
	receiveIndex (index) {
		Dispatcher.dispatch({
			actionType: "FOLLOW_INDEX_RECEIVED",
			index: index
		});
	},
	receiveFollowerIndex (index) {
		Dispatcher.dispatch({
			actionType: "FOLLOWER_INDEX_RECEIVED",
			index: index
		});
	},
	receiveFollowingIndex (index) {
		Dispatcher.dispatch({
			actionType: "FOLLOWING_INDEX_RECEIVED",
			index: index
		});
	}
};

module.exports = FollowAction;
