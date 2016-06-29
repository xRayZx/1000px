const React = require('react');
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');

window.PhotoStore = require('../stores/photo_store.js');

//Components
const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');
const HomeFeed = require('./home_feed');
const Landing = require('./landing');
const PhotoUploadForm = require('./photo_upload.jsx');

//Modals
const WaveModal = require('boron/WaveModal');
const DropModal = require('boron/DropModal');

const App = React.createClass({
  getInitialState () {
    return (
      {currentUser: UserStore.currentUser()}
    );
  },
  componentDidMount () {
    UserStore.addListener(this._updateCurrentUser);
  },
  _updateCurrentUser () {
    this.setState({
      currentUser: UserStore.currentUser()
    });
  },
  showLogin () {
    this.refs.loginModal.show();
  },
  showSignup () {
    this.refs.signupModal.show();
  },
	showUpload () {
		this.refs.uploadModal.show();
	},
  render () {
    const modalStyle = {
      width: '250px'
    };
    let navButtons = (
      <nav>
        <ul>
          <li onClick={this.showLogin}>Log In</li>
          <DropModal ref="loginModal" modalStyle={modalStyle}>
            <LoginForm/>
          </DropModal>
          <li onClick={this.showSignup}>Sign Up</li>
          <DropModal ref="signupModal" modalStyle={modalStyle}>
            <SignupForm/>
          </DropModal>
        </ul>
      </nav>
    );
    let homePage = (
      <Landing modalStyle={modalStyle}/>
    );
    if (this.state.currentUser) {
      homePage = (
        <div className="home-page">
          <HomeFeed currentUser={this.state.currentUser}/>
          <button onClick={UserActions.logout} className="btn btn-danger">Log Out</button>
        </div>
      );
      navButtons = (
        <nav>
          <ul>
            <li>Profile</li>
            <li onClick={this.showUpload}>Upload</li>
						<WaveModal ref="uploadModal">
							<PhotoUploadForm currentUser={this.state.currentUser}/>
						</WaveModal>
          </ul>
        </nav>
      );
    }
    const header = (
      <header>
          <img src="/1000px-logo.png" width="120px" height="75px"/>
          {navButtons}
      </header>
    );
    return (
      <div>
        {header}
        {homePage}
      </div>
    );
  }
});

module.exports = App;
