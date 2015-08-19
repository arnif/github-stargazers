var React = require('react');
var { Router, Route, Link, Redirect } = require('react-router');
import { history } from 'react-router/lib/HashHistory';
var ViewActionCreators = require('./actions/ViewActionCreators');

var Owner = require('./components/Owner');
var FrontPage = require('./components/FrontPage');


var NoMatch = React.createClass({
  render: function () {
    return <p>I don’t understand that route</p>;
  }
});

React.render((
  <Router history={history}>
    <Route component={FrontPage}>
      <Route path="/" component={Owner}/>
      { /*
        <Route path="/:owner/:repo" component={Repo}/>  
        */      
      }
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('app'));

