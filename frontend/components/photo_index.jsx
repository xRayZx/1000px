const React = require('react');
const Masonry = require('react-masonry-component');
const PhotoStore = require('../stores/photo_store.js');
const PhotoActions = require('../actions/photo_actions.js');
const PhotoIndexItem = require('./photo_index_item.jsx');

let shuffle = function (a) {
    let j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

const masonryOptions = {
	isFitWidth: true,
	gutter: 5
};

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
			photoKeys.every( (key) => {
				let photo = this.state.photos[key];
				let indexItem = (
					<PhotoIndexItem photo={photo} key={photo.id} size="landing"/>
				);
				indexItems.unshift(indexItem);
				if (indexItems.length > 20) {
					return false;
				} else {
					return true;
				}
			} );
		}
		return (
			<Masonry className="my-gallery-class" elementType='ul' options={masonryOptions} disableImagesLoaded={false} updateOnEachImageLoad={true}>
				{indexItems}
			</Masonry>
		);
	}
});

module.exports = PhotoIndex;
