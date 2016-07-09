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
		UserStore.resetErrors;
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
		// this.props.updateHeader();
  },
  guestLogin (e) {
    e.preventDefault();
		let guestUser = ['g', 'u', 'e', 's', 't', 'p', 'a', 's', 's', 'w', 'o', 'r', 'd'];
		let idx = 0;
		window.interval = setInterval(()=>{
			if (idx < 5) {
				let name = this.state.username + guestUser[idx];
				this.setState({username: name});
			} else if (idx < 13){
				let pw = this.state.password + guestUser[idx];
				this.setState({password: pw})
			} else {
				UserActions.guestLogin();
				this.props.updateHeader();
			}
			idx = idx + 1;
		}, 100);
  },
	showSignup () {
		this.props.close();
		this.props.showSignup();
	},
  render () {
    return (
      <div className="auth-form">
        <form onSubmit={this.handleSubmit}>
        <h3 className="form-header">Log In</h3>
        	{UserStore.errors()}
          <section>
						<FormGroup controlId="formControlsText">
								<FormControl type="text" placeholder="Username" value={this.state.username} onChange={this.updateUsername}/>
						</FormGroup>
						<FormGroup controlId="formControlsPassword">
              <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.updatePassword}/>
						</FormGroup>
          </section>
					<ul className="auth-buttons">
						<li className="auth-button"><Button type="submit" className="btn btn-success">Log In</Button></li>
						<li className="auth-button"><Button onClick={this.guestLogin} className="btn btn-primary">Guest Login</Button></li>
					</ul>
        </form>
				<br/>
				<div className="auth-redirect">
					<span>Don't have an account?</span>
					<br/>
					<span className="redirect-link" onClick={this.showSignup}>Sign up here!</span>
				</div>
      </div>
    );
  }
});

module.exports = LoginForm;
