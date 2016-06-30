const React = require('react');
const PhotoActions = require('../actions/photo_actions.js');

const PhotoDetail = React.createClass({
	getInitialState () {
		return (
			{
				id: this.props.photo.id,
				title: '',
				description: '',
				posterId: null,
				url: ''
			}
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
			description: photo.description,
			posterId: photo.poster_id,
			url: photo.url
		});
	},
	render () {
		return (
			<div>
				Hello from details
			</div>
		)
	}
});

module.exports = PhotoDetail;
