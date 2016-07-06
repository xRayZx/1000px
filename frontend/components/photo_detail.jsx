const React = require('react');
const hashHistory = require('react-router').hashHistory;
const PhotoActions = require('../actions/photo_actions.js');
const PhotoStore = require('../stores/photo_store.js');
const CloudinaryUtil = require('../util/cloudinary_util.js');

const PhotoDetail = React.createClass({
	getInitialState () {
		let photoId = null;
		if (this.props.photo) {
			photoId = this.props.photo.id;
		} else {
			photoId = this.props.params.id
		}
		return (
			{
				id: photoId,
				title: '',
				description: '',
				posterId: null,
				url: '',
				poster: '',
				profilePic: '',
				postedAt: ''
			}
		);
	},
	componentDidMount () {
		this.listener = PhotoStore.addListener(this._updateDetails);
		if (this.props.photo) {
			PhotoActions.fetchPhoto(this.props.photo.id);
		} else {
			PhotoActions.fetchPhoto(this.props.params.id);
		}
	},
	componentWillUnmount () {
		this.listener.remove();
	},
	_updateDetails () {
		let photoId = null;
		if (this.props.photo) {
			photoId = this.props.photo.id;
		} else {
			photoId = this.props.params.id
		}
		let photo = PhotoStore.find(photoId);
		this.setState({
			title: photo.title,
			description: photo.description,
			posterId: photo.poster_id,
			url: photo.url,
			poster: photo.poster,
			profilePic: photo.poster_pic,
			postedAt: photo.created_at
		});
	},
	showProfile () {
		hashHistory.push(`/profile/${this.state.posterId}`);
	},
	redirectToDetail () {
		if (this.props.photo) {
		hashHistory.push(`/photos/${this.state.id}`);
		}
	},
	render () {
		let style = 'detail-page';
		let contain = "img-container";
		let height = 800;
		let imgClass = "detail-img"
		let infoClass = "info";
		if (this.props.photo) {
			style = 'detail-modal';
			contain = "img-container-modal"
			height = 600;
			imgClass = "detail-img-modal"
			infoClass = 'info-modal';
		} 
		return (
			<div className={style}>
				<div className={contain}>
					<img className={imgClass} src={CloudinaryUtil.image(this.state.url, {height: height})} onClick={this.redirectToDetail}/>
				</div>
				<div className={infoClass}>
					<div className="poster-info">
						<img className="home-profile-pic home-poster" src={CloudinaryUtil.image(this.state.profilePic, 
							{gravity: 'face', crop: 'crop'})} onClick={this.showProfile}/>
						<span><strong className="home-poster" onClick={this.showProfile}>{this.state.poster}</strong></span>
					</div>
					<div className="photo-info">
						<p className="photo-title">{this.state.title}</p>
						<p className="photo-desc">{this.state.description}</p>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = PhotoDetail;
