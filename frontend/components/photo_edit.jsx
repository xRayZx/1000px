const React = require('react');
const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;
const PhotoStore = require('../stores/photo_store.js');
const PhotoActions = require('../actions/photo_actions.js');
const hashHistory = require('react-router').hashHistory;

const PhotoEdit = React.createClass({
	getInitialState () {
		return ({
			id: this.props.photoId,
			title: '',
			description: ''
		})
	},
	componentDidMount () {
		this.listener = PhotoStore.addListener(this.loadInfo);
		PhotoActions.fetchPhoto(this.props.photoId)
	},
	componentWillUnmount () {
		this.listener.remove();
	},
	loadInfo () {
		let photo = PhotoStore.find(this.props.photoId);
		this.setState({title: photo.title, description: photo.description});
	},
	_updateTitle (e) {
		this.setState({title: e.target.value});
	},
	_updateDesc (e) {
		this.setState({description: e.target.value});
	},
	_handleSubmit () {
		let newInfo = {id: this.state.id, title: this.state.title, description: this.state.description};
		PhotoActions.updatePhoto(newInfo);
		this.props.close();
	},
	_deletePhoto () {
		let result = confirm("Are you sure you want to delete this photo?");
		if (result) {
			PhotoActions.deletePhoto(this.state.id);
			hashHistory.push(`/profile/${window.currentUser.id}`);
		}
	},
	render () {
		return (
			<form className="photo-edit-form" onSubmit={this._handleSubmit}>
				<h3 className="form-header">Edit Photo</h3>
				<FormGroup controlId="formControlsText">
					<ControlLabel>Title</ControlLabel>
					<FormControl type="text" value={this.state.title} onChange={this._updateTitle}/>
				</FormGroup>
				<FormGroup controlId="formControlsTextarea">
					<ControlLabel>Description</ControlLabel>
					<FormControl componentClass="textarea" value={this.state.description} onChange={this._updateDesc}/>
				</FormGroup>
				<Button className="photo-edit-btn" type="submit">Update Photo</Button>
				<Button className="btn btn-danger photo-edit-btn" onClick={this._deletePhoto}>Delete Photo</Button>
			</form>
		)
	}
});

module.exports = PhotoEdit;
