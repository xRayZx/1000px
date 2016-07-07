const React = require('react');
const CommentStore = require('../stores/comment_store.js');
const CommentActions = require('../actions/comment_actions.js');
const CloudinaryUtil = require('../util/cloudinary_util.js');

const Comments = React.createClass({
	getInitialState () {
		return ({
			comments: CommentStore.all()
		});
	},
	componentDidMount () {
		this.listener = CommentStore.addListener(this._onChange);
		CommentActions.fetchComments(this.props.photoId);
	},
	componentWillUnmount () {
		this.listener.remove();
	},
	_onChange() {
		this.setState({comments: CommentStore.all()});
	},
	render () {
		let comments = [];
		this.state.comments.forEach( (comment) => {
			let element = (
				<li className="comment" key={comment.id}>
					<div className="commentor-info">
						{comment.poster}
					</div>
					<div className="comment-body">
						{comment.body}
					</div>
				</li>
			);
			comments.push(element);
		} )
		return (
			<div className="comments-container">
				<ul className="comments-list">
					{comments}
				</ul>
			</div>
		)
	}
});

module.exports = Comments;
