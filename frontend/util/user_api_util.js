const AppDispatcher = require('../dispatcher/dispatcher');

const UserApiUtil = {
	fetchProfile (userId, success) {
		$.ajax({
			url: `/api/user/${userId}`,
			type: 'GET',
			dataType: 'json',
			success: function (resp) {
				success(resp);
			}
		});
	},
	updateProfile (user, success) {
		$.ajax({
			url: '/api/user',
			type: 'PATCH',
			dataType: 'json',
			data: {user: user},
			success: function (resp) {
				success(resp);
			}
		});
	},
	post: function(options){
		$.ajax({
			url: options.url,
			type: "post",
			data: {user: options.user},
			success: options.success,
			error: options.error
		});
	},
	logout: function(success, error){
		$.ajax({
			url: '/api/session',
			method: 'delete',
			success: success,
			error: error
		});
	},
	fetchCurrentUser: function(success, error){
		$.ajax({
			url: '/api/session',
			method: 'get',
			success: success,
			error: error
		});
	},
};

module.exports = UserApiUtil;
