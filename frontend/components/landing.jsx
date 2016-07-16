const React = require('react');
const Modal = require('boron/DropModal');
const LoginForm = require('./login_form.jsx');
const PhotoIndex = require('../components/photo_index.jsx');

const settings = {
	dots: true,
	autoplay: true,
	autoplaySpeed: 5000,
	centerMode: true,
	infinite: true,
	lazyLoad: true,
	slidesToShow: 1
}

const Landing = React.createClass({
  componentDidMount () {
  },
  showLogin () {
    this.refs.loginModal.show();
  },
	hideLogin () {
		this.refs.loginModal.hide();
	},
  render () {
    return (
      <div>
        <div className="splash">
            <h1 className="fade-in">Home of High Quality Photos</h1>
            <h3 className="fade-in">Showcase your photography and stay inspired!</h3>
            <button className="btn btn-primary get-started fade-in" onClick={this.showLogin}>Get Started!</button>
            <Modal ref="loginModal" modalStyle={this.props.modalStyle}>
              <LoginForm close={this.hideLogin} showSignup={this.props.showSignup}/>
            </Modal>
        </div>
				<PhotoIndex source="Landing"/>
      </div>
    );
  }
})

module.exports = Landing;
