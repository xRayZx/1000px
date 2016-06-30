const React = require('react');

const PhotoIndexItem = React.createClass({
	render () {
		return (
			<li className="animate">
				<img className="grid-item" src={this.props.photo.url}/>
			</li>
		)
	}
});

module.exports = PhotoIndexItem;
