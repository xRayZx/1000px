const CommentApiUtil = ({
	fetchComments (photoId, success) {
		$.ajax({
			url: `/api/photos/${photoId}/comments`,
			type: 'GET',
			dataType: 'json',
			success: function (resp) {
				success(resp);
			}
		});
	}
});

module.exports = CommentApiUtil;
