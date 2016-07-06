const React = require('react');
const FollowActions = require('../actions/follow_actions.js');
const FollowStore = require('../stores/follow_store.js');
const CloudinaryUtil = require('../util/cloudinary_util.js');
const FollowButton = require('./follow_button.jsx');

const FollowIndex = React.createClass({
	getInitialState () {
		return ({
			index: FollowStore.index(),
			toggle: false
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
	render () {
		let userList = [];
		if (this.state.index) {
			this.state.index.forEach( (user) => {
				let photos = [];
				if (user.photos) {
					let i = user.photos.length;
					for (let l = 0; l < i; l++) {
						let el = (
							<img className="suggest-pic-item" src={CloudinaryUtil.image(user.photos[l].url, {height: 40})} key={l}/>
						);
						photos.push(el);
					}
				}
				let element = (
					<div className="follow-index-item" key={user.id}>
						<div className="suggest-info">
							<img className="follow-pic" src={CloudinaryUtil.image(user.pic, {width: 50, gravity: 'face', crop: 'thumb'})}/>
							<div className="suggest-text">
								<span><strong>{user.name}</strong></span>
								<div>{user.photoCount} Photos</div>
								<FollowButton following={this.followed.includes(user.id)} user={user.id} from="suggest" updateButton={this.updateButtons}/>
							</div>
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
				<h4>Follow Suggestions</h4>
				{userList}
			</div>
		)
	}
});

module.exports = FollowIndex;
