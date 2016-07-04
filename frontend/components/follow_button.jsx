const React = require('react');
const FollowAction = require('../actions/follow_actions.js');

const Follow = React.createClass({
	_toggleFollow () {
		if (this.props.following) {
			FollowAction.unfollow(this.props.user);
		} else {
			FollowAction.follow(this.props.user);
		}
	},
	render () {
		return (
			<button onClick={this._toggleFollow}>
				{this.props.following ? "Unfollow" : "Follow"}
			</button>
		)
	}
});

module.exports = Follow;
