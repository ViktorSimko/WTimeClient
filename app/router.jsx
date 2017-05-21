var React = require('react');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

import Layout from 'Layout'
import MainContainer from 'MainContainer'
import LoginContainer from 'LoginContainer'
import ProjectsContainer from 'ProjectsContainer'
import ProjectContainer from 'ProjectContainer'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <Route path='/login' component={LoginContainer}/>
      <IndexRoute component={MainContainer}/>
    </Route>
  </Router>
);