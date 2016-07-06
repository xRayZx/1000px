const React = require('react');
const FollowAction = require('../actions/follow_actions.js');

const Follow = React.createClass({
	_toggleFollow () {
		if (this.props.following) {
			FollowAction.unfollow(this.props.user);
		} else {
			FollowAction.follow(this.props.user);
		}
		if (this.props.updateButton) {
			this.props.updateButton(this.props.user);
		}
	},
	render () {
		let style = "follow-btn btn btn-primary";
		if (this.props.from === "suggest") {
			style = "suggest-follow-btn";
		}
		let value = "Follow";
		if (this.props.following) {
			value = "Following";
		}
		return (
			<button onClick={this._toggleFollow} className={style}>{value}</button>
		)
	}
});

module.exports = Follow;
