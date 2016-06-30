//React
const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

window.PhotoStore = require('./stores/photo_store.js');
window.PhotoActions = require('./actions/photo_actions.js');

//Auth
const UserActions = require('./actions/user_actions');

//Components
const App = require('./components/app');
const ProfilePage = require('./components/profile_page.jsx');

const routes = (
  <Route path="/" component={App}>
		<Route path="profile/:id" component={ProfilePage}/>
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
