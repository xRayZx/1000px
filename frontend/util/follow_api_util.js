const FollowApiUtil = {
	fetchIndex (success) {
		$.ajax({
			url: '/api/follow',
			type: 'GET',
			dataType: 'json',
			success: function (resp) {
				success(resp);
			}
		});
	},
	follow (userId, success) {
		$.ajax({
			url: `/api/follow/${userId}`,
			type: 'POST',
			dataType: 'json',
			success: function (resp) {
				success(resp);
			}
		});
	},
	unfollow (userId, success) {
		$.ajax({
			url: `/api/follow/${userId}`,
			type: 'DELETE',
			dataType: 'json',
			success: function (resp) {
				success(resp);
			}
		});
	},
	status (userId, success) {
		$.ajax({
			url: `/api/follow/${userId}`,
			type: 'GET',
			dataType: 'json',
			success: function (resp) {
				success(resp);
			}
		});
	},
	fetchFollowerIndex (userId, success) {
		$.ajax({
			url: `/api/followers/${userId}`,
			type: 'GET',
			dataType: 'json',
			success: function (resp) {
				success(resp);
			}
		});
	},
	fetchFollowingIndex (userId, success) {
		$.ajax({
			url: `/api/following/${userId}`,
			type: 'GET',
			dataType: 'json',
			success: function (resp) {
				success(resp);
			}
		});
	}
};

module.exports = FollowApiUtil;
