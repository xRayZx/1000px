const React = require('react');
const hashHistory = require('react-router').hashHistory;
const CloudinaryUtil = require('../util/cloudinary_util.js');
const PhotoActions = require('../actions/photo_actions.js');

const PhotoUploadForm = React.createClass({
	getInitialState () {
		return (
			{title: '',
				description: '',
				poster_id: this.props.currentUser.id,
				url: ''
			}
		);
	},
	updateTitle (e) {
		this.setState({title: e.target.value});
	},
	updateDescription (e) {
		this.setState({description: e.target.value});
	},
	getUrl (photo) {
		this.setState({url: photo.secure_url});
	},
	getUploadedPhoto (e) {
		e.preventDefault();
		CloudinaryUtil.openUploadWidget(this.getUrl);
	},
	handleSubmit () {
		let newPhoto = {
			title: this.state.title,
			description: this.state.description,
			url: this.state.url,
			poster_id: this.state.poster_id
		};
		PhotoActions.uploadPhoto(newPhoto);
		this.props.close();
		hashHistory.push(`/profile/${this.props.currentUser.id}`);
	},
	render () {
		return (
			<div className="photo-upload">
				<form onSubmit={this.handleSubmit}>
					<h3 className="form-header">Upload Photo</h3>
					<fieldset className="form-group">
						<label>Title</label>
						<br/>
						<input type="text" value={this.state.title} onChange={this.updateTitle} />
					</fieldset>
					<fieldset className="form-group">
						<label>Description</label>
						<br/>
						<input type="text" value={this.state.description} onChange={this.updateDescription} />
					</fieldset>
					<button onClick={this.getUploadedPhoto} className="btn btn-primary">Select Photo</button>
					<br/>
					<input type="submit" className="btn btn-primary" value="Upload Photo!"/>
				</form>
			</div>
		)
	}
})

module.exports = PhotoUploadForm;
