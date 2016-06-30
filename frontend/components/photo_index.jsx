const React = require('react');
const PhotoStore = require('../stores/photo_store.js');
const PhotoActions = require('../actions/photo_actions.js');
const PhotoIndexItem = require('./photo_index_item.jsx');

const PhotoIndex = React.createClass({
	getInitialState () {
		return (
			{photos: PhotoStore.all()}
		);
	},
	componentDidMount () {
		PhotoStore.addListener(this._onChange);
		PhotoActions.fetchAllPhotos();
	},
	_onChange () {
		this.setState({photos: PhotoStore.all()});
	},
	render () {
		let indexItems = [];
		if (this.state.photos) {
			const photoKeys = Object.keys(this.state.photos);
			photoKeys.forEach( (key) => {
				let photo = this.state.photos[key];
				let indexItem = (
					<PhotoIndexItem photo={photo} key={photo.id} />
				);
				indexItems.push(indexItem);
			} );
		}
		return (
			<div>
				{indexItems}
			</div>
		);
	}
});

module.exports = PhotoIndex;
