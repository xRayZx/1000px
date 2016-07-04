const FollowApiUtil = require('../util/follow_api_util');
const Dispatcher = require('../dispatcher/dispatcher.js');

const FollowAction = {
	follow (userId) {
		FollowApiUtil.follow(userId, FollowAction.receiveStatus);
	},
	unfollow (userId) {
		FollowApiUtil.unfollow(userId, FollowAction.receiveStatus);
	},
	status (userId) {
		FollowApiUtil.status(userId, FollowAction.receiveStatus);
	},
	receiveStatus (profile) {
		Dispatcher.dispatch({
			actionType: "PROFILE_RECEIVED",
			profile: profile
		});
	}
};

module.exports = FollowAction;
