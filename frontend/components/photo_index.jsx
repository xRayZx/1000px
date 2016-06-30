const React = require('react');
const Masonry = require('react-masonry-component');
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
		this.listener = PhotoStore.addListener(this._onChange);
		PhotoActions.fetchAllPhotos();
	},
	componentWillUnmount () {
		this.listener.remove();
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
			<Masonry className="my-gallery-class" elementType='ul'>
				{indexItems}
			</Masonry>
		);
	}
});

module.exports = PhotoIndex;
