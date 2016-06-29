const React = require('react');
const PhotoStore = require('../stores/photo_store.js');
const PhotoActions = require('../actions/photo_actions.js');

const PhotoIndex = React.createClass({
	getInitialState () {
		return (
			{photos: PhotoStore.all()}
		);
	},
	componentDidMount () {
		PhotoStore.addListener(this._onChange);
		PhotoActions.fetchAllPhotos();
	},
	_onChange () {
		this.setState({photos: PhotoStore.all()});
	},
	render () {
		let indexItems = [];
		if (this.state.photos) {
			const photoKeys = Object.keys(this.state.photos);
			photoKeys.forEach( (key) => {
				let photo = this.state.photos[key];
				let indexItem = (
					<div key={photo.id}>
						{photo.title}
						<br/>
						<img src={photo.url} width='30%' height='30%'/>
					</div>
				);
				indexItems.push(indexItem);
			} );
		}
		return (
			<div>
				{indexItems}
			</div>
		);
	}
});

module.exports = PhotoIndex;
