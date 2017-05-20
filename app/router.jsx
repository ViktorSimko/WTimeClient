var React = require('react');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

import Layout from 'Layout';
import MainContainer from 'MainContainer'
import LoginContainer from 'LoginContainer';
import ProjectsContainer from 'ProjectsContainer';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <Route path='/login' component={LoginContainer}/>
      <Route component={MainContainer}>
        <Route path='/projects' component={ProjectsContainer}/>
      </Route>
    </Route>
  </Router>
);