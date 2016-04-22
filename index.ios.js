'use strict';

var React = require('react-native');
var Landing = require('./Landing');
// var DataAndLogic = require('./DataAndLogic');
var Geolocation = require('./Geolocation');
 

var drinkSync = React.createClass({
  getInitialState: function() {
    return {
      legal: false
    };
  },
  handleLegalSubmit: function() {
    this.setState({
      legal: true
    });
  },
  render: function (){
    return this.state.legal ? <Geolocation /> : <Landing handleLegalSubmit={this.handleLegalSubmit}/>
  }
});

React.AppRegistry.registerComponent('drinkSync', () => drinkSync);
