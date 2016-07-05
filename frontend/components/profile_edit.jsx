const React = require('react');
const hashHistory = require('react-router').hashHistory;
const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;

const UserActions = require('../actions/user_actions.js');
const CloudinaryUtil = require('../util/cloudinary_util.js');

const ProfileEdit = React.createClass({
	getInitialState () {
		return ({
			fName: this.props.currentUser.first_name,
			lName: this.props.currentUser.last_name,
			description: this.props.currentUser.description,
			pic: this.props.currentUser.pic_url,
			cover: this.props.currentUser.cover
		});
	},
	_updateFname (e) {
		this.setState({fName: e.target.value});
	},
	_updateLname (e) {
		this.setState({lName: e.target.value});
	},
	_updateDesc (e) {
		this.setState({description: e.target.value});
	},
	_uploadPic (e) {
		e.preventDefault();
		CloudinaryUtil.openUploadWidget(this._updatePic);
	},
	_updatePic (photo) {
		this.setState({pic: photo.path});
	},
	_handleSubmit (e) {
		e.preventDefault();
		const user = {
			first_name: this.state.fName,
			last_name: this.state.lName,
			description: this.state.description,
			pic_url: this.state.pic,
			cover: this.state.cover
		};

		UserActions.updateProfile(user);
		hashHistory.push(`/profile/${this.props.currentUser.id}`);
		this.props.close();
	},
	render () {
		return (
			<form className="profile-edit">
				<div className="name-field-container">
					<FormGroup controlId="formControlsText">
						<ControlLabel className="name-field">First Name</ControlLabel>
						<FormControl type="text" className="name-field" value={this.state.fName} onChange={this._updateFname}/>
					</FormGroup>
					<FormGroup controlId="formControlsText">
						<ControlLabel className="name-field">Last Name</ControlLabel>
						<FormControl className="name-field" type="text" value={this.state.lName} onChange={this._updateLname}/>
					</FormGroup>
				</div>
				<FormGroup controlId="formControlsTextarea">
					<ControlLabel>Description</ControlLabel>
					<FormControl componentClass="textarea" value={this.state.description} onChange={this._updateDesc}/>
				</FormGroup>
				<FormGroup>
					<Button onClick={this._uploadPic}>Upload new profile pic</Button>
					<div>
						{this.state.pic === '' ? <div className="empty-preview"/> : <img className="upload-preview" src={CloudinaryUtil.image(this.state.pic, {width: 50})}/> }
					</div>
				</FormGroup>
				<Button type="submit" className="edit-submit" onClick={this._handleSubmit}>
					Submit Changes
				</Button>
			</form>
		)
	}
});

module.exports = ProfileEdit;
