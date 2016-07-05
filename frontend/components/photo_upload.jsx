const React = require('react');
const hashHistory = require('react-router').hashHistory;
const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;
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
		this.setState({url: photo.path});
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
					<FormGroup controlId="formsControlsText">
						<ControlLabel>Title</ControlLabel>
						<FormControl type="text" value={this.state.title} onChange={this.updateTitle} />
					</FormGroup>
					<FormGroup controlId="formsControlsTextarea">
						<ControlLabel>Description</ControlLabel>
						<FormControl componentClass="textarea" value={this.state.description} onChange={this.updateDescription} />
					</FormGroup>
					<div>
						<Button onClick={this.getUploadedPhoto} className="btn btn-primary edit-submit">Select Photo</Button>
					</div>
				{this.state.url === '' ? <div className="empty-preview"/> : <img className="upload-preview" src={CloudinaryUtil.image(this.state.url, {width: 200})}/> }
					<Button type="submit" className="btn btn-primary edit-submit">Upload Photo!</Button>
				</form>
			</div>
		)
	}
})

module.exports = PhotoUploadForm;
