const React = require('react');
const PhotoDetail = require('./photo_detail.jsx');
const ScaleModal = require('boron/ScaleModal');

const PhotoIndexItem = React.createClass({
	showDetails () {
		this.refs.detailsModal.show();
	},
	render () {
		return (
			<li className="image-element-class" onClick={this.showDetails}>
				<ScaleModal ref="detailsModal">
					<PhotoDetail photo={this.props.photo}/>
				</ScaleModal>
				<img className="img-idx" src={this.props.photo.url}/>
			</li>
		)
	}
});

module.exports = PhotoIndexItem;
