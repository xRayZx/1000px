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
			password2: "",
      firstName: "",
      lastName: "",
			error: null
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
  updateFirst (e) {
    this.setState({firstName: e.target.value});
  },
  updateLast (e) {
    this.setState({lastName: e.target.value});
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
	showLogin () {
		this.props.close();
		this.props.showLogin();
	},
  handleSubmit (e) {
    e.preventDefault();
		if (this.state.password === this.state.password2) {
			let user = {username: this.state.username, password: this.state.password, first_name: this.state.firstName, last_name: this.state.lastName};
			UserActions.signup(user);
			this.setState({password: "", password2: ""});
		} else {
			this.setState({error: "Passwords do not match"});
		}
  },
  render () {
    return (
      <div className="auth-form">
        <form onSubmit={this.handleSubmit}>
        <h3 className="form-header">Sign Up</h3>
				<div className="auth-errors">
					{this.state.error ? <div> this.state.error </div> : null}
					{UserStore.errors() ? UserStore.errors().map((err) => {return (<div>{err}</div>)}) : null}
				</div>
          <section>
            <FormGroup controlId="formControlsText">
                <FormControl type="text" placeholder="First Name" onChange={this.updateFirst}/>
            </FormGroup>
            <FormGroup controlId="formControlsText">
                <FormControl type="text" placeholder="Last Name" onChange={this.updateLast}/>
            </FormGroup>
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
          <Button type="submit" className="auth-button btn btn-success">Sign Up!</Button>
        </form>
				<br/>
				<div className="auth-redirect">
					<span>Already have an account?</span>
					<br/>
					<span>Want to demo? <span className="redirect-link" onClick={this.showLogin}>Log in here!</span></span>
				</div>
      </div>
    );
  }
});

module.exports = SignupForm;
