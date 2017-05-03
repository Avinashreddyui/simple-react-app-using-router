var React = require('react');
var Nav = require('Nav');
var Weather = require('./Weather');
var About = require('./About');

var Main = React.createClass({
  render: function () {
    return (
      <div>
          <About/>
        <Weather/>
        <Nav/>
        <h2>Main Component</h2>
      </div>
    );
  }
});

module.exports = Main;
