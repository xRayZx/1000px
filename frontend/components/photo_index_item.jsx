const React = require('react');
const PhotoDetail = require('./photo_detail.jsx');
const ScaleModal = require('boron/ScaleModal');
const CloudinaryUtil = require('../util/cloudinary_util.js');

const PhotoIndexItem = React.createClass({
	showDetails () {
		this.refs.detailsModal.show();
	},
	render () {
		debugger
		return (
			<li className="image-element-class" onClick={this.showDetails}>
				<ScaleModal ref="detailsModal">
					<PhotoDetail photo={this.props.photo}/>
				</ScaleModal>
				{CloudinaryUtil.image(this.props.photo.url)}
			</li>
		)
	}
});

module.exports = PhotoIndexItem;
