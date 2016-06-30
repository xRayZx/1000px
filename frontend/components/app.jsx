const React = require('react');
const hashHistory = require('react-router').hashHistory;
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');

//Components
const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');
const PhotoUploadForm = require('./photo_upload.jsx');
const HomeFeed = require('./home_feed');
const Landing = require('./landing');
const ProfilePage = require('./profile_page.jsx');

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
	hideUpload () {
		this.refs.uploadModal.hide();
	},
	logout () {
		UserActions.logout();
		hashHistory.push('/');
	},
	returnHome () {
		hashHistory.push('/');
	},
	myProfile () {
		hashHistory.push(`/profile/${this.state.currentUser.id}`);
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
          <button onClick={this.logout} className="btn btn-danger">Log Out</button>
        </div>
      );
      navButtons = (
        <nav>
          <ul>
            <li onClick={this.myProfile}>Profile</li>
            <li onClick={this.showUpload}>Upload</li>
						<WaveModal ref="uploadModal">
							<PhotoUploadForm currentUser={this.state.currentUser} close={this.hideUpload}/>
						</WaveModal>
          </ul>
        </nav>
      );
    }
    const header = (
      <header>
          <img src="/1000px-logo.png" width="120px" height="75px" onClick={this.returnHome}/>
          {navButtons}
      </header>
    );
    return (
      <div>
        {header}
				{this.props.children ? this.props.children : homePage}
      </div>
    );
  }
});

module.exports = App;
