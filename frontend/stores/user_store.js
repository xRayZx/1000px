const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;

const UserStore = new Store(AppDispatcher);

let _currentUser = null;
let _errors = [];
let _profile = null;
let _followStatus = null;

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "LOGIN":
    	UserStore.login(payload.user);
      break;
    case "LOGOUT":
    	UserStore.logout();
      break;
    case "ERROR":
      UserStore.setErrors(payload.errors);
			break;
		case "PROFILE_RECEIVED":
			UserStore.setProfile(payload.profile);
			break;
		case "FOLLOW":
			UserStore.setFollow(payload.following);
			break;
  }
  UserStore.__emitChange();
};

UserStore.login = function(user){
	_currentUser = user;
	window.currentUser = _currentUser;
  _errors = null;
};

UserStore.logout = function(){
  _currentUser = null;
	window.currentUser = _currentUser;
  _errors = null;
};

UserStore.currentUser = function(){
  if (_currentUser) {
  	return $.extend({}, _currentUser);
  }
};

UserStore.setErrors = function(errors){
  _errors = errors;
};

UserStore.errors = function(){
  if (_errors){
    return [].slice.call(_errors);
  }
};

UserStore.resetErrors = function () {
	_errors = null;
}

UserStore.setProfile = function (profile) {
	_profile = profile;
};

UserStore.profile = function () {
	return _profile;
};

UserStore.setFollow = function (status) {
	_followStatus = status;
};

UserStore.following = function () {
	return _followStatus;
};

module.exports = UserStore;
