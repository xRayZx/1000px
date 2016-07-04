const React = require('react');

const ProfileEdit = React.createClass({
	getInitialState () {
		return ({
			fName: this.props.currentUser.first_name,
			lName: this.props.currentUser.last_name,
			description: this.props.currentUser.description,
			pic: this.props.currentUser.pic_url,
			cover: this.props.currentUser.cover
		});
	},
	render () {
		return (

		)
	}
});

module.exports = ProfileEdit;
