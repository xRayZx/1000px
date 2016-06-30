const React = require('react');
const PhotoStore = require('../stores/photo_store.js');
const PhotoActions = require('../actions/photo_actions.js');

const ProfilePage = React.createClass({
	getInitialState () {
		return (
			{photos: PhotoStore.all()}
		);
	},
	componentDidMount () {
		this.listener = PhotoStore.addListener(this._updateFeed);
		PhotoActions.fetchMyPhotos();
	},
	componentWillUnmount () {
		this.listener.remove();
	},
	_updateFeed () {
		this.setState({photos: PhotoStore.all()});
	},
	render () {
		
	}
});

module.exports = ProfilePage;
