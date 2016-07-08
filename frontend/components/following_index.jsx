const React = require('react');
const FollowStore = require('../stores/follow_store.js');
const FollowActions = require('../actions/follow_actions.js');
const hashHistory = require('react-router').hashHistory;
const CloudinaryUtil = require('../util/cloudinary_util.js');

const FollowingIndex = React.createClass({
	getInitialState () {
		return ({
			index: []
		});
	},
	componentDidMount () {
		this.listener = FollowStore.addListener(this._onChange);
		FollowActions.fetchFollowingIndex(this.props.userId);
	},
	componentWillUnmount () {
		this.listener.remove();
	},
	_onChange () {
		this.setState({index: FollowStore.followings()});
	},
	showProfile (userId) {
		return (e) => {
			hashHistory.push(`/profile/${userId}`);
			this.props.close();
		}
	},
	render () {
		let list = this.state.index.map((following) => {
			return (
			<li className="follows-list" key={following.id}>
				<img className="follow-pic" onClick={this.showProfile(following.id)} src={CloudinaryUtil.image(following.pic, {width: 40, gravity: 'face', crop: 'thumb'})}/>
				<div className="suggest-text">
					<span><strong onClick={this.showProfile(following.id)}>{following.name}</strong></span>
					<div>{following.photoCount} Photos</div>
				</div>
			</li>
			);
		});
		return (
			<ul className="follows-list-container">
				<div className="follows-header">Following</div>
				{list}
			</ul>
		)
	}
});

module.exports = FollowingIndex;
