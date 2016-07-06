const React = require('react');
const PhotoStore = require('../stores/photo_store.js');
const PhotoActions = require('../actions/photo_actions.js');
const PhotoIndexItem = require('./photo_index_item.jsx');
const Masonry = require('react-masonry-component');
const CloudinaryUtil = require('../util/cloudinary_util.js');
const hashHistory = require('react-router').hashHistory;
const FollowIndex = require('./follow_index.jsx');

const HomeFeed = React.createClass({
	getInitialState () {
		return (
			{photos: PhotoStore.home()});
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
	showProfile (userId) {
		return (e) => {
			hashHistory.push(`/profile/${userId}`)
		}
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
							<img className="home-profile-pic home-poster" src={CloudinaryUtil.image(photo.poster_pic, {gravity: 'face', crop: 'crop'})} onClick={this.showProfile(photo.poster_id)}/>
							<span><strong className="home-poster" onClick={this.showProfile(photo.poster_id)}>{photo.poster}</strong> posted:</span>
						</p>
						<PhotoIndexItem photo={photo} key={photo.id} size="home"/>
					</div>
				);
				indexItems.push(indexItem);
			} );
		}
    return (
      <div>
				<div className="greeting">
					Hello, {this.props.currentUser.first_name}!
				</div>
				<FollowIndex/>
				<Masonry className="my-gallery-class home" elementType='ul' disableImagesLoad={false} updateOnEachImageLoad={true}>
					{indexItems}
				</Masonry>
      </div>
    );
  }
});

module.exports = HomeFeed;
