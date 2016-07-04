const React = require('react');
const hashHistory = require('react-router').hashHistory;
const PhotoActions = require('../actions/photo_actions.js');
const CloudinaryUtil = require('../util/cloudinary_util.js');

const PhotoDetail = React.createClass({
	getInitialState () {
		return (
			{
				id: this.props.photo.id,
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
		PhotoActions.fetchPhoto(this.props.photo.id);
	},
	componentWillUnmount () {
		this.listener.remove();
	},
	_updateDetails () {
		let photo = PhotoStore.find(this.props.photo.id);
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
	render () {
		return (
			<div>
				<div className="img-container">
					<img className="detail-img" src={CloudinaryUtil.image(this.state.url, {height: 600})}/>
				</div>
				<div className="info">
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
