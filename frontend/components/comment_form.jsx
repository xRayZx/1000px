const React = require('react');
const FormGroup = require('react-bootstrap').FormGroup;
const FormControl = require('react-bootstrap').FormControl;
const CloudinaryUtil = require('../util/cloudinary_util.js');
const CommentActions = require('../actions/comment_actions.js');

const CommentForm = React.createClass({
	getInitialState () {
		return ({
			body: ''
		});
	},
	_updateBody (e) {
		this.setState({body: e.target.value});
	},
	checkSubmit (e) {
		if (e && e.key === "Enter") {
			e.preventDefault();
			const comment = {poster_id: window.currentUser.id, photo_id: this.props.photoId, body: this.state.body};
			CommentActions.addComment(this.props.photoId, comment);
			this.setState(this.getInitialState());
		}
	},
	render () {
		return (
			<div className="comment-form">
				<img src={CloudinaryUtil.image(window.currentUser.pic_url, {width: 35, gravity: 'face', crop: 'thumb'})}/>
				<form>
						<FormControl componentClass="textarea" value={this.state.body} placeholder="Add a comment" onKeyPress={this.checkSubmit} onChange={this._updateBody}/>
				</form>
			</div>
		)
	}
});

module.exports = CommentForm;
