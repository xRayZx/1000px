const React = require('react');
const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');

const App = React.createClass({
  render () {
    return (
      <div>
        Hello From React!
        <LoginForm/>
        <SignupForm/>
      </div>
    );
  }
});

module.exports = App;
