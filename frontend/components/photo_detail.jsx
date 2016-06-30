const React = require('react');
const PhotoActions = require('../actions/photo_actions.js');

const PhotoDetail = React.createClass({
	getInitialState () {
		return (
			{photo: PhotoStore.find(this.props.photo.id)}
		);
	},
	componentDidMount () {
		this.listener = PhotoStore.addListener(this._updateDetails);
		PhotoActions.fetchPhoto(this.props.photo.id);
	},
	componentWillUnmount () {
		this.listener.remove();
	},
	_updateDetails () {
		let photo = PhotoStore.find(this.props.photo.id);
		this.setState({
			title: photo.title,
			description: photo.description
			
		});
	}
});

module.exports = PhotoDetail;
