const React = require('react');
const hashHistory = require('react-router').hashHistory;
const CommentStore = require('../stores/comment_store.js');
const CommentActions = require('../actions/comment_actions.js');
const CommentForm = require('./comment_form.jsx');
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
	showProfile (userId) {
		return (e) => {
			hashHistory.push(`/profile/${userId}`);
		}
	},
	render () {
		let comments = [];
		this.state.comments.forEach( (comment) => {
			let element = (
				<li className="comment" key={comment.id}>
					<div className="commentor-img">
						<img onClick={this.showProfile(comment.poster_id)} src={CloudinaryUtil.image(comment.poster_pic, {width: 35, gravity: 'face', crop: 'thumb'})}/>
					</div>
					<div className="comment-text">
						<span><strong onClick={this.showProfile(comment.poster_id)}>{comment.poster} </strong></span>
						<div>{comment.body}</div>
					</div>
				</li>
			);
			comments.unshift(element);
		} )
		return (
			<div className="comments-container">
			{window.currentUser ? <CommentForm photoId={this.props.photoId}/> : null}
				<ul className="comments-list">
					{comments}
				</ul>
			</div>
		)
	}
});

module.exports = Comments;
