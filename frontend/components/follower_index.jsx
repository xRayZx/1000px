const React = require('react');
const FollowStore = require('../stores/follow_store.js');
const FollowActions = require('../actions/follow_actions.js');
const hashHistory = require('react-router').hashHistory;
const CloudinaryUtil = require('../util/cloudinary_util.js');

const FollowerIndex = React.createClass({
	getInitialState () {
		return ({
			index: []
		});
	},
	componentDidMount () {
		this.listener = FollowStore.addListener(this._onChange);
		FollowActions.fetchFollowerIndex(this.props.userId);
	},
	componentWillUnmount () {
		this.listener.remove();
	},
	_onChange () {
		this.setState({index: FollowStore.followers()});
	},
	showProfile (userId) {
		return (e) => {
			hashHistory.push(`/profile/${userId}`);
			this.props.close();
		}
	},
	render () {
		let list = this.state.index.map((follower) => {
			return (
			<li className="follows-list" key={follower.id}>
				<img className="follow-pic" onClick={this.showProfile(follower.id)} src={CloudinaryUtil.image(follower.pic, {width: 40, gravity: 'face', crop: 'thumb'})}/>
				<div className="suggest-text">
					<span><strong onClick={this.showProfile(follower.id)}>{follower.name}</strong></span>
					<div>{follower.photoCount} Photos</div>
				</div>
			</li>
			);
		});
		return (
			<ul className="follows-list-container">
				<div className="follows-header">Followers</div>
				{list}
			</ul>
		)
	}
});

module.exports = FollowerIndex;
