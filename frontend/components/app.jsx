const React = require('react');
const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');

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
      <div>
        Show this page if not logged in
        <br/>
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
        <div>
          Hello {this.state.currentUser.username}
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
          <img src="/logo.png" width="120px" height="75px"/>
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
