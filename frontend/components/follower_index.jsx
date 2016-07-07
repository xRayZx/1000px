const React = require('react');
const FollowStore = require('../stores/follow_store.js');
const FollowActions = require('../actions/follow_actions.js');

const FollowerIndex = React.createClass({
	getInitialState () {
		return ({
			index: []
		});
	},
	componentDidMount () {
		FollowStore.addListener(this._onChange);
		FollowActions.fetchFollowerIndex(this.props.params.id);
	}
});

module.exports = FollowerIndex;
