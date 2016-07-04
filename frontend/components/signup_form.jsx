const React = require("react");
const UserActions = require("../actions/user_actions");
const UserStore = require('../stores/user_store');
const FormGroup = require('react-bootstrap').FormGroup;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;

const SignupForm = React.createClass({
  getInitialState () {
    return {
			currentUser: UserStore.currentUser(),
			userErrors: UserStore.errors(),
      username: "",
			password: "",
			password2: ""
    };
  },
	componentDidMount () {
		this.listener = UserStore.addListener(this._updateUser);
	},
	componentWillUnmount () {
		this.listener.remove();
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
	getValidationState () {
		const length = this.state.password.length;
		if (length > 5) {
			return 'success';
		} else {
			return 'error';
		}
	},
  updatePassword2 (e) {
    this.setState({password2: e.target.value});
  },
	getValidationState2 () {
		const match = (this.state.password === this.state.password2);
		if (match) {
			return 'success';
		} else {
			return 'error';
		}
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
        <h3 className="form-header">Sign Up</h3>
          <section>
						<FormGroup controlId="formControlsText">
								<FormControl type="text" placeholder="Username" onChange={this.updateUsername}/>
						</FormGroup>
						<FormGroup controlId="formControlsPassword" validationState={this.getValidationState()}>
              <FormControl type="password" placeholder="Password (min length: 6)" onChange={this.updatePassword}/>
						</FormGroup>
						<FormGroup controlId="formControlsPassword" validationState={this.getValidationState2()}>
              <FormControl type="password" placeholder="Password (must match)" onChange={this.updatePassword2}/>
						</FormGroup>
          </section>
        {UserStore.errors()}
          <Button type="submit" className="auth-button btn btn-success">Sign Up!</Button>
        </form>
      </div>
    );
  }
});

module.exports = SignupForm;
