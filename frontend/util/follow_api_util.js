const FollowApiUtil = {
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
	}
};

module.exports = FollowApiUtil;
