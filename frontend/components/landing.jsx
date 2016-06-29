const React = require('react');
const Modal = require('boron/DropModal');
const SignupForm = require('./signup_form');

const Landing = React.createClass({
  componentDidMount () {
  },
  showSignup () {
    this.refs.signupModal.show();
  },
  render () {
    return (
      <div>
        <div className="splash">
            <h1>Home of High Quality Photos</h1>
            <h3>Showcase your photography and stay inspired!</h3>
            <button className="btn btn-primary get-started" onClick={this.showSignup}>Get Started!</button>
            <Modal ref="signupModal" modalStyle={this.props.modalStyle}>
              <SignupForm />
            </Modal>
        </div>
      </div>
    );
  }
})

module.exports = Landing;
