const UserConstants = require('../constants/user_constants');
const UserApiUtil = require('../util/user_api_util');
const UserStore = require('../stores/user_store');
const AppDispatcher = require('../dispatcher/dispatcher');

const UserActions = {
	updateProfile: function (user) {
		UserApiUtil.updateProfile(user, UserActions.receiveProfile);
	},
	fetchProfile: function (userId) {
		UserApiUtil.fetchProfile(userId, UserActions.receiveProfile);
	},
	receiveProfile: function (profile) {
		AppDispatcher.dispatch({
			actionType: "PROFILE_RECEIVED",
			profile: profile
		});
	},
	fetchCurrentUser: function(){
		UserApiUtil.fetchCurrentUser(UserActions.receiveCurrentUser, UserActions.handleError);
	},
	signup: function(user){
		UserApiUtil.post({
			url: "/api/user",
			user: user,
			success: UserActions.receiveCurrentUser,
			error: UserActions.handleError
		});
	},
	login: function(user){
		UserApiUtil.post({
			url: "/api/session",
			user: user,
			success: UserActions.receiveCurrentUser,
			error: UserActions.handleError
		});
	},
	guestLogin: function(){
		clearInterval(window.interval);
		UserActions.login({username: "guest", password: "password"});
	},
	receiveCurrentUser: function(user){
		AppDispatcher.dispatch({
			actionType: UserConstants.LOGIN,
			user: user
		});
	},
	handleError: function(error) {
		AppDispatcher.dispatch({
			actionType: UserConstants.ERROR,
			errors: error.responseJSON.errors
		});
	},
	removeCurrentUser: function(){
		AppDispatcher.dispatch({
			actionType: UserConstants.LOGOUT,
		});
	},
	logout: function(){
		UserApiUtil.logout(UserActions.removeCurrentUser, UserActions.handleError);
	}
};

module.exports = UserActions;
