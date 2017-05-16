var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

import Container from 'Container';
import Login from 'Login';
import Projects from 'Projects';

$(document).foundation();

require('applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Container}>
      <Route path='/projects' component={Projects}/>
      <IndexRoute component={Login}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
