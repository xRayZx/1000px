const React = require('react');
const FollowAction = require('../actions/follow_actions.js');

const Follow = React.createClass({
	getInitialState () {
		return ({
			hover: false
		});
	},
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
	_mouseOver () {
		this.setState({hover: true});
	},
	_mouseOut () {
		this.setState({hover: false});
	},
	render () {
		let style = "follow-btn btn btn-primary";
		if (this.props.from === "suggest") {
			style = "suggest-follow-btn";
		}
		let value = "Follow";
		if (this.props.following && this.props.from === "suggest" && this.state.hover) {
			value = "Unfollow";
			style = "suggest-follow-btn red"
		} else if (this.props.following && this.state.hover) {
			value = "Unfollow";
			style = "follow-btn btn btn-danger";
		} else if (this.props.following && this.props.from === "suggest") {
			value = "Following";
			style = "suggest-follow-btn green";
		} else if (this.props.following) {
			style = "follow-btn btn btn-success";
			value = "Following";
		}
		return (
			<button onClick={this._toggleFollow} onMouseOver={this._mouseOver} onMouseOut={this._mouseOut} className={style}>{value}</button>
		)
	}
});

module.exports = Follow;
