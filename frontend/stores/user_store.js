const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;

const UserStore = new Store(AppDispatcher);

let _currentUser;
let _errors;

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
  }
  UserStore.__emitChange();
};

UserStore.login = function(user){
	_currentUser = user;
  _errors = null;
};

UserStore.logout = function(){
  _currentUser = null;
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

module.exports = UserStore;
