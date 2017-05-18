var React = require('react');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

import Container from 'Container';
import Login from 'Login';
import Projects from 'Projects';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Container}>
      <Route path='/projects' component={Projects}/>
      <IndexRoute component={Login}/>
    </Route>
  </Router>
);