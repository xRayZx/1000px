//React
const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

window.FollowActions = require('./actions/follow_actions.js');
window.FollowStore = require('./stores/follow_store.js');

//Auth
const UserActions = require('./actions/user_actions');

//Components
const App = require('./components/app');
const ProfilePage = require('./components/profile_page.jsx');
const PhotoDetail = require('./components/photo_detail.jsx');

const routes = (
  <Route path="/" component={App}>
		<Route path="profile/:id" component={ProfilePage}/>
		<Route path="photos/:id" component={PhotoDetail}/>
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
