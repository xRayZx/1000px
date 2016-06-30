const React = require("react");
const UserActions = require("../actions/user_actions");
const UserStore = require('../stores/user_store');

const LoginForm = React.createClass({
  getInitialState () {
    return {
      username: "",
      password: ""
    };
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
  guestLogin (e) {
    e.preventDefault();
    UserActions.guestLogin();
  },
  render () {
    return (
      <div className="auth-form">
        <form onSubmit={this.handleSubmit}>
        <h3 className="form-header">Log In</h3>
          <section>
            <fieldset className="form-group">
              <input type="text" value={this.state.username} placeholder="Username" onChange={this.updateUsername}/>
            </fieldset>
            <fieldset className="form-group">
              <input type="password" value={this.state.password} placeholder="Password" onChange={this.updatePassword}/>
            </fieldset>
          </section>
					<ul className="auth-buttons">
						<li className="auth-button"><input type="submit" className="btn btn-success" value="Log In" /></li>
						<li className="auth-button"><button onClick={this.guestLogin} className="btn btn-primary">Guest Login</button></li>
					</ul>
        </form>
        {UserStore.errors()}
      </div>
    );
  }
});

module.exports = LoginForm;
