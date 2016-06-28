//React
const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

//Auth
const UserActions = require('./actions/user_actions');

//Components
const App = require('./components/App');

const routes = (
  <Route path="/" component={App}>
  </Route>
);

document.addEventListener('DOMContentLoaded', function () {
  if(window.currentUser) {
    UserActions.receiveCurrentUser(currentUser);
  }
  const root = document.getElementById('root');
  ReactDOM.render(
    <Router history={hashHistory}>
      {routes}
    </Router>,
    root
  );
});
