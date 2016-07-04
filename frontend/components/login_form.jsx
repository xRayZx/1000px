const React = require("react");
const UserActions = require("../actions/user_actions");
const UserStore = require('../stores/user_store');
const FormGroup = require('react-bootstrap').FormGroup;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;

const LoginForm = React.createClass({
  getInitialState () {
    return {
      username: "",
      password: ""
    };
  },
	componentWillUnmount () {
		UserStore.setErrors([]);
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
						<FormGroup controlId="formControlsText">
								<FormControl type="text" placeholder="Username" onChange={this.updateUsername}/>
						</FormGroup>
						<FormGroup controlId="formControlsPassword">
              <FormControl type="password" placeholder="Password" onChange={this.updatePassword}/>
						</FormGroup>
          </section>
        	{UserStore.errors()}
					<ul className="auth-buttons">
						<li className="auth-button"><Button type="submit" className="btn btn-success">Log In</Button></li>
						<li className="auth-button"><Button onClick={this.guestLogin} className="btn btn-primary">Guest Login</Button></li>
					</ul>
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
