const React = require('react');

const HomeFeed = React.createClass({
  render () {
    return (
      <div>
        Hello, {this.props.currentUser.username}!
        <br/>
        This is coming from the Home Page Component
      </div>
    );
  }
});

module.exports = HomeFeed;
