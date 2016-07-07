const CommentApiUtil = ({
	addComment (photoId, comment, success) {
		$.ajax({
			url: `api/photos/${photoId}/comments`,
			type: 'POST',
			dataType: 'json',
			data: {comment: comment},
			success: function (resp) {
				success(resp);
			}
		});
	},
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
