const React = require('react');
const hashHistory = require('react-router').hashHistory;
const FollowActions = require('../actions/follow_actions.js');
const FollowStore = require('../stores/follow_store.js');
const CloudinaryUtil = require('../util/cloudinary_util.js');
const FollowButton = require('./follow_button.jsx');

const FollowIndex = React.createClass({
	getInitialState () {
		return ({
			index: FollowStore.index()
		});
	},
	componentWillMount () {
		this.followed = [];
	},
	componentDidMount () {
		this.listener = FollowStore.addListener(this._onChange);
		FollowActions.fetchIndex();
	},
	componentWillUnmount () {
		this.listener.remove();
	},
	_onChange () {
		this.setState({index: FollowStore.index()})
	},
	updateButtons (userId) {
		if (!this.followed.includes(userId)) {
			this.followed.push(userId);
		} else {
			let idx = this.followed.indexOf(userId);
			this.followed.splice(idx, 1);
		}
	},
	showProfile (userId) {
		return (e) => {
			hashHistory.push(`/profile/${userId}`);
		}
	},
	refresh () {
		FollowActions.fetchIndex();
	},
	render () {
		let userList = [];
		if (this.state.index) {
			this.state.index.forEach( (user) => {
				let photos = [];
				if (user.photos) {
					let i = user.photos.length;
					for (let l = 0; l < i; l++) {
						let el = (
							<img className="suggest-pic-item" onClick={this.showProfile(user.id)} src={CloudinaryUtil.image(user.photos[l].url, {height: 50, width: 50, crop: 'lfill'})} key={l}/>
						);
						photos.push(el);
					}
				}
				let element = (
					<div className="follow-index-item" key={user.id}>
						<div className="suggest-info">
							<img className="follow-pic" onClick={this.showProfile(user.id)} src={CloudinaryUtil.image(user.pic, {width: 40, gravity: 'face', crop: 'thumb'})}/>
							<div className="suggest-text">
								<span><strong onClick={this.showProfile(user.id)}>{user.name}</strong></span>
								<div>{user.photoCount} Photos</div>
							</div>
								<FollowButton following={this.followed.includes(user.id)} user={user.id} from="suggest" updateButton={this.updateButtons}/>
							</div>
							<div className="suggest-pics">
								{photos}
							</div>
					</div>
				);
				userList.push(element);
			} )
		}
		return (
			<div className="follow-index">
			<h4>Who To Follow</h4>
			<span className="refresh" onClick={this.refresh}>Refresh</span>
				{userList}
			</div>
		)
	}
});

module.exports = FollowIndex;
