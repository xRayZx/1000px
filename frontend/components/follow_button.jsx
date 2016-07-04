const React = require('react');

const Follow = React.createClass({
	getInitialState () {
		return (
			{
				following: this.props.following
			}
		);
	},
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
				{this.state.following ? "Unfollow" : "Follow"}
			</button>
		)
	}
});

module.exports = Follow;
