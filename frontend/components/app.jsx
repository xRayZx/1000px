const React = require('react');
const hashHistory = require('react-router').hashHistory;
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const NavDropdown = require('react-bootstrap').NavDropdown;
const MenuItem = require('react-bootstrap').MenuItem;

//Utils
const CloudinaryUtil = require('../util/cloudinary_util.js');

//Components
const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');
const PhotoUploadForm = require('./photo_upload.jsx');
const HomeFeed = require('./home_feed');
const Landing = require('./landing');
const ProfilePage = require('./profile_page.jsx');
const ProfileEdit = require('./profile_edit.jsx');

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
	showEdit () {
		this.refs.editModal.show();
	},
	hideEdit () {
		this.refs.editModal.hide();
	},
	logout () {
		UserActions.logout();
		this._updateCurrentUser();
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
        </div>
      );
			let navDrop= (
				<span>
					<img className="nav-img" src={CloudinaryUtil.image(this.state.currentUser.pic_url, {width: 25, gravity: 'face', crop: 'thumb'})}/>
					{this.state.currentUser.first_name}
					</span>
			);
      navButtons = (
        <nav>
          <ul>
							<NavDropdown className="profile-dropdown" title={navDrop} id="nav-dropdown">
								<MenuItem onClick={this.myProfile}>My Profile</MenuItem>
								<MenuItem onClick={this.showEdit}>Edit Profile</MenuItem>
								<MenuItem divider />
								<MenuItem onClick={this.logout} >Log Out</MenuItem>
							</NavDropdown>
            <li onClick={this.showUpload} className="nav-upload"><i className="fa fa-cloud-upload"/>Upload</li>
						<WaveModal ref="uploadModal">
							<PhotoUploadForm currentUser={this.state.currentUser} close={this.hideUpload}/>
						</WaveModal>
						<DropModal ref="editModal">
							<ProfileEdit currentUser={this.state.currentUser} close={this.hideEdit}/>
						</DropModal>
          </ul>
        </nav>
      );
    }
    const header = (
      <header>
          <img src="/1000px-logo.png" height="50px" onClick={this.returnHome}/>
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
