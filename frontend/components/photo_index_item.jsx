const React = require('react');
const PhotoDetail = require('./photo_detail.jsx');
const ScaleModal = require('boron/ScaleModal');
const CloudinaryUtil = require('../util/cloudinary_util.js');

const size = {
	landing: 400,
	home: 600,
	profile: 500
};

const PhotoIndexItem = React.createClass({
	getInitialState () {
		return (
			{photoURL: CloudinaryUtil.image(this.props.photo.url,
			 	 {width: size[this.props.size],
					 crop: "limit",
					  alt: this.props.photo.title
				 })
			}
		);
	},
	showDetails () {
		this.refs.detailsModal.show();
	},
	render () {
		return (
			<li className="image-element-class" onClick={this.showDetails}>
				<ScaleModal ref="detailsModal">
					<PhotoDetail photo={this.props.photo}/>
				</ScaleModal>
				<img className="img-idx" src={this.state.photoURL}/>
			</li>
		)
	}
});

module.exports = PhotoIndexItem;
