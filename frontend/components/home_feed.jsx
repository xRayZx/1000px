const React = require('react');
const PhotoStore = require('../stores/photo_store.js');
const PhotoActions = require('../actions/photo_actions.js');

const HomeFeed = React.createClass({
	getInitialState () {
		return (
			{photos: PhotoStore.all()}
		);
	},
	componentDidMount () {
		PhotoStore.addListener(this._updateFeed);
		PhotoActions.fetchAllPhotos();
	},
	_updateFeed () {
		debugger
		this.setState({photos: PhotoStore.all()});
	},
  render () {
    return (
      <div>
        Hello, {this.props.currentUser.username}!
      </div>
    );
  }
});

module.exports = HomeFeed;
