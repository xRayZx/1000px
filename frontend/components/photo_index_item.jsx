const React = require('react');
const PhotoDetail = require('./photo_detail.jsx');
const ScaleModal = require('boron/ScaleModal');

const PhotoIndexItem = React.createClass({
	showDetails () {
		this.refs.detailsModal.show();
	},
	render () {
		return (
			<li className="animate" onClick={this.showDetails}>
				<ScaleModal ref="detailsModal">
					<PhotoDetail photo={this.props.photo}/>
				</ScaleModal>
				<img className="grid-item" src={this.props.photo.url}/>
			</li>
		)
	}
});

module.exports = PhotoIndexItem;
