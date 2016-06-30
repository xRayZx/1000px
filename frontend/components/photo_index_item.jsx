const React = require('react');

const PhotoIndexItem = React.createClass({
	render () {
		return (
			<div className="index-item">
				<img src={this.props.photo.url} width="50%" height="50%"/>
			</div>
		)
	}
});

module.exports = PhotoIndexItem;
