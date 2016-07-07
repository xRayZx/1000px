const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');

const CommentStore = new Store(Dispatcher);
let _comments = [];

CommentStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case 'COMMENTS_RECEIVED':
			CommentStore._resetComments(payload.comments);
			break;
	}
	CommentStore.__emitChange();
};

CommentStore._resetComments = function (comments) {
	_comments = [];
	_comments = comments;
};

CommentStore.all = function () {
	return _comments.slice();
}

module.exports = CommentStore;
