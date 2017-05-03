var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main');
var {Route, IndexRoute, Router, hashHistory} = require('react-router');
var About = require('./components/About');
var Weather= require('./components/Weather');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
           <Route path="about" component={About}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app'));