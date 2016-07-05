const React = require('react');
const PhotoStore = require('../stores/photo_store.js');
const PhotoActions = require('../actions/photo_actions.js');
const UserStore = require('../stores/user_store.js');
const UserActions = require('../actions/user_actions.js');
const FollowActions = require('../actions/follow_actions.js');
const PhotoIndexItem = require('./photo_index_item.jsx');
const Masonry = require('react-masonry-component');
const CloudinaryUtil = require('../util/cloudinary_util.js');
const FollowButton = require('./follow_button.jsx');

const masonryOptions = {
	isFitWidth: true,
	gutter: 10
};

const ProfilePage = React.createClass({
	getInitialState () {
		return (
			{photos: PhotoStore.profile(),
				profile: {},
			}
		);
	},
	componentDidMount () {
		this.userListener = UserStore.addListener(this._setProfile);
		this.photoListener = PhotoStore.addListener(this._updateFeed);
		UserActions.fetchProfile(this.props.params.id);
		PhotoActions.fetchProfilePhotos(this.props.params.id);
	},
	componentWillUnmount () {
		this.userListener.remove();
		this.photoListener.remove();
	},
	componentWillReceiveProps (newProps) {
		UserActions.fetchProfile(newProps.params.id);
		PhotoActions.fetchProfilePhotos(newProps.params.id);
	},
	_setProfile () {
		this.setState({profile: UserStore.profile()});
	},
	_updateFeed () {
		this.setState({photos: PhotoStore.profile()});
	},
	render () {
		let indexItems = [];
		let profile = (
			<div></div>
		);
		
		if (this.state.profile) {
			if (this.state.photos) {
				const photoKeys = Object.keys(this.state.photos);
				photoKeys.forEach( (key) => {
					let photo = this.state.photos[key];
					let indexItem = (
						<PhotoIndexItem photo={photo} key={photo.id} size="profile"/>
					);
					indexItems.push(indexItem);
				} );
			}
			profile = (
				<div>
					<div className="profile-info">
						<img className="profile-pic" src={CloudinaryUtil.image(this.state.profile.pic_url, {width: 100, gravity: 'face', crop: 'thumb'})}/>
						<h3 className="profile-name">{this.state.profile.first_name} {this.state.profile.last_name}</h3>
						<FollowButton following={this.state.profile.following} user={this.props.params.id} />
						<div className="profile-desc">{this.state.profile.description}</div>
					</div>
					<div>
						{Object.keys(this.state.photos).length} Photos
					</div>
					<Masonry elementType='ul' className='my-gallery-class' options={masonryOptions}>
						{indexItems}
					</Masonry>
				</div>
			)
		}

		return (
			<div className="profile-page">
				{profile}
			</div>
		)
	}
});

module.exports = ProfilePage;
