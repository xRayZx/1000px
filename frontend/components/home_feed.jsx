const React = require('react');
const PhotoStore = require('../stores/photo_store.js');
const PhotoActions = require('../actions/photo_actions.js');
const PhotoIndexItem = require('./photo_index_item.jsx');
const Masonry = require('react-masonry-component');
const CloudinaryUtil = require('../util/cloudinary_util.js');
const hashHistory = require('react-router').hashHistory;
const FollowIndex = require('./follow_index.jsx');
const InfiniteScroll = require('react-infinite-scroller');

const HomeFeed = React.createClass({
	getInitialState () {
		return (
			{photos: PhotoStore.home(),
				loaded: 15});
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
	hasMore () {
		return (this.state.photos.length > this.state.loaded);
	},
	loadMore (pageNum) {
		this.setState({loaded: (10 * pageNum + 1)});
	},
  render () {
		let indexItems = [];
		let welcome = null;
		if (this.state.photos && this.state.photos.length !== 0) {
			this.state.photos.forEach( (photo) => {
				let indexItem = (
					<div className="home-post" key={photo.id}>
						<p>
							<img className="home-profile-pic home-poster" src={CloudinaryUtil.image(photo.poster_pic, {gravity: 'face', crop: 'crop'})} onClick={this.showProfile(photo.poster_id)}/>
							<span><strong className="home-poster" onClick={this.showProfile(photo.poster_id)}>{photo.poster}</strong> posted:</span>
						</p>
						<PhotoIndexItem photo={photo} key={photo.id} size="home"/>
					</div>
				);
				indexItems.unshift(indexItem);
			} );
		} else {
			welcome = (
				<div className="welcome-home home-post">
					<div className="welcome-msg">
						This is your home feed.
						<br/>
						Photos of Photographers that you follow will appear here.
						<br/>
						Follow some Photographers on the right!
					</div>
					<img src="http://res.cloudinary.com/dlgyh9jw/image/upload/c_scale,w_993/v1469678713/Welcome-on-Beach_rgygyi.jpg" alt="welcome to 1000px" className="img-idx welcome-home"/>
				</div>
			)
		}
    return (
      <div>
				<FollowIndex/>
				<div className="my-home-gallery">
					{welcome}
					<InfiniteScroll pageStart={0} loadMore={this.loadMore} hasMore={this.hasMore()} loader={<div className="loader">Loading...</div>}>
						{indexItems.slice(0, this.state.loaded)}
					</InfiniteScroll>
				</div>
      </div>
    );
  }
});

module.exports = HomeFeed;
