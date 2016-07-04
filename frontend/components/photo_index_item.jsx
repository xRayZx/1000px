const React = require('react');
const PhotoDetail = require('./photo_detail.jsx');
const ScaleModal = require('boron/ScaleModal');
const CloudinaryUtil = require('../util/cloudinary_util.js');

const size = {
	landing: 250,
	home: 400,
	profile: 350
};

const modalStyle = {
	width: 900
};

const PhotoIndexItem = React.createClass({
	getInitialState () {
		return (
			{photoURL: CloudinaryUtil.image(this.props.photo.url,
			 	 {width: size[this.props.size],
					 crop: "limit",
					 alt: this.props.photo.title,
				 }),
			 poster: this.props.photo.poster,
			 profilePic: CloudinaryUtil.image(this.props.photo.poster_pic, {width: 40, gravity: 'face', crop: 'thumb'})
			}
		);
	},
	showDetails () {
		this.refs.detailsModal.show();
	},
	render () {
		return (
			<li className="image-element-class" onClick={this.showDetails}>
				<ScaleModal ref="detailsModal" modalStyle={modalStyle}>
					<PhotoDetail photo={this.props.photo}/>
				</ScaleModal>
				<img className="img-idx" src={this.state.photoURL}/>
				<div className="thumb-credits">
					<img className="thumb-profile-pic" src={this.state.profilePic}/>
					<span>{this.state.poster}</span>
				</div>
			</li>
		)
	}
});

module.exports = PhotoIndexItem;
