const React = require('react');
const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const HomeFeed = require('./home_feed');
const Landing = require('./landing');

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
  render () {
    let homePage = (
      <div className="under-header">
        <Landing />
        <LoginForm/>
      </div>
    );
    let navButtons = (
      <nav>
        <ul>
          <li>Log In</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    );
    if (this.state.currentUser) {
      homePage = (
        <div className="under-header">
          <HomeFeed currentUser={this.state.currentUser}/>
          <button onClick={UserActions.logout} className="btn btn-danger">Log Out</button>
        </div>
      );
      navButtons = (
        <nav>
          <ul>
            <li>Profile</li>
            <li>Upload</li>
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
