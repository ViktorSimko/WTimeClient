var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux'
import Router from 'router'
import store from 'store'

$(document).foundation();

require('applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {Router}
  </Provider>,
  document.getElementById('app')
);
