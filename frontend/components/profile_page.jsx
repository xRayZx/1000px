const React = require('react');
const PhotoStore = require('../stores/photo_store.js');
const PhotoActions = require('../actions/photo_actions.js');
const UserStore = require('../stores/user_store.js');
const UserActions = require('../actions/user_actions.js');
const PhotoIndexItem = require('./photo_index_item.jsx');

const ProfilePage = React.createClass({
	getInitialState () {
		return (
			{photos: PhotoStore.profile(),
				profile: {}
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
						<PhotoIndexItem photo={photo} key={photo.id} />
					);
					indexItems.push(indexItem);
				} );
			}
			profile = (
				<div>
					<div className="profile-info">
						<img className="profile-pic" src={this.state.profile.pic_url}/>
						<h3 className="profile-name">{this.state.profile.first_name} {this.state.profile.last_name}</h3>
					</div>
					<div className="grid">
						{indexItems}
					</div>
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
