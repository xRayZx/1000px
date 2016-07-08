const React = require('react');
const Modal = require('boron/DropModal');
const SignupForm = require('./signup_form');
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
  showSignup () {
    this.refs.signupModal.show();
  },
	hideSignup () {
		this.refs.signupModal.hide();
	},
  render () {
    return (
      <div>
        <div className="splash">
            <h1 className="fade-in">Home of High Quality Photos</h1>
            <h3 className="fade-in">Showcase your photography and stay inspired!</h3>
            <button className="btn btn-primary get-started fade-in" onClick={this.showSignup}>Get Started!</button>
            <Modal ref="signupModal" modalStyle={this.props.modalStyle}>
              <SignupForm close={this.hideSignup} showLogin={this.props.showLogin}/>
            </Modal>
        </div>
				<PhotoIndex source="Landing"/>
      </div>
    );
  }
})

module.exports = Landing;
