const Dispatcher = require('../dispatcher/dispatcher.js');
const CommentApiUtil = require('../util/comment_api_util');

const CommentActions = {
	fetchComments (photoId) {
		CommentApiUtil.fetchComments(photoId, CommentActions.receiveIndex);
	},
	receiveIndex (comments) {
		Dispatcher.dispatch({
			actionType: "COMMENTS_RECEIVED",
			comments: comments
		});
	}
};

module.exports = CommentActions;
