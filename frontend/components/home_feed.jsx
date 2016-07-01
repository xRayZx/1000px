const React = require('react');
const PhotoStore = require('../stores/photo_store.js');
const PhotoActions = require('../actions/photo_actions.js');
const PhotoIndexItem = require('./photo_index_item.jsx');
const Masonry = require('react-masonry-component');
const CloudinaryUtil = require('../util/cloudinary_util.js');

const HomeFeed = React.createClass({
	getInitialState () {
		return (
			{photos: PhotoStore.home()}
		);
	},
	componentDidMount () {
		this.listener = PhotoStore.addListener(this._updateFeed);
		PhotoActions.fetchHomeFeed();
	},
	componentWillUnmount() {
		this.listener.remove();
	},
	_updateFeed () {
		this.setState({photos: PhotoStore.home()});
	},
  render () {
		let indexItems = [];
		if (this.state.photos) {
			const photoKeys = Object.keys(this.state.photos);
			photoKeys.forEach( (key) => {
				let photo = this.state.photos[key];
				let indexItem = (
					<div className="home-post" key={photo.id}>
						<p>
							<img className="home-profile-pic" src={CloudinaryUtil.image(photo.poster_pic, {width: 50, gravity: 'face', crop: 'crop'})}/>
							<span><strong>{photo.poster}</strong> posted:</span>
						</p>
						<PhotoIndexItem photo={photo} key={photo.id} size="home"/>
					</div>
				);
				indexItems.push(indexItem);
			} );
		}
    return (
      <div>
        Hello, {this.props.currentUser.username}!
				<Masonry className="my-gallery-class" elementType='ul'>
					{indexItems}
				</Masonry>
      </div>
    );
  }
});

module.exports = HomeFeed;
