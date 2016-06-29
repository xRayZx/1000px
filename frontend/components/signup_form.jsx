const React = require("react");
const UserActions = require("../actions/user_actions");
const UserStore = require('../stores/user_store');

const SignupForm = React.createClass({
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
    UserActions.signup(user);
    this.setState({username: '', password: ''});
  },
  render () {
    return (
      <div className="auth-form">
        <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
          <section>
            <fieldset className="form-group">
              <input type="text" value={this.state.username} placeholder="Username" onChange={this.updateUsername}/>
            </fieldset>
            <fieldset className="form-group">
              <input type="password" value={this.state.password} placeholder="Password" onChange={this.updatePassword}/>
            </fieldset>
          </section>
          <input type="submit" className="auth-button btn btn-success" value="Sign Up!" />
        </form>
        {UserStore.errors()}
      </div>
    );
  }
});

module.exports = SignupForm;
