const React = require("react");
const UserActions = require("../actions/user_actions");
const UserStore = require('../stores/user_store');

const LoginForm = React.createClass({
  getInitialState () {
    return {
      currentUser: UserStore.currentUser(),
      userErrors: UserStore.errors(),
      username: "",
      password: ""
    };
  },
  componentDidMount () {
    this.listener = UserStore.addListener(this._updateUser);
  },
  componentWillUnmount () {
    this.listener.remove();
  },
  _updateUser () {
    this.setState({
      currentUser: UserStore.currentUser(),
      userErrors: UserStore.errors()
    });
  },
  updateUsername (e) {
    this.setState({username: e.target.value});
  },
  updatePassword (e) {
    this.setState({password: e.target.value});
  },
  handleSubmit (e) {
    e.preventDefault();
    let user = {username: this.state.username, password: this.state.password};
    UserActions.login(user);
    this.setState({username: '', password: ''});
  },
  render () {
    return (
      <div className="login-form">
        <h3>Log In</h3>
        <form onSubmit={this.handleSubmit}>
          <section>
            <input type="text" value={this.state.username} placeholder="Username" onChange={this.updateUsername}/>
            <input type="password" value={this.state.password} placeholder="Password" onChange={this.updatePassword}/>
          </section>
          <input type="submit" className="auth-button" value="Log In" />
          <button onClick={this.guestLogin} className="auth-button">Guest Login</button>
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
