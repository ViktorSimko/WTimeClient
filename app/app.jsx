var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

$(document).foundation();

require('applicationStyles');

ReactDOM.render(
  <p>Boilerplate 3</p>,
  document.getElementById('app')
);