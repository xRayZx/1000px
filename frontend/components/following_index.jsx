const React = require('react');
const FollowStore = require('../stores/follow_store.js');
const FollowActions = require('../actions/follow_actions.js');

const FollowingIndex = React.createClass({
	getInitialState () {
		return ({
			index: []
		});
	},
	componentDidMount () {
		FollowStore.addListener(this._onChange);
		FollowActions.fetchFollowingIndex(this.props.params.id);
	}
});

module.exports = FollowingIndex;
