'use strict';

var React = require('react-native');
var Landing = require('./Landing');
var DataAndLogic = require('./DataAndLogic');

var drinkSync = React.createClass({
  getInitialState: function() {
    return {
      legal: true
    };
  },
  handleLegalSubmit: function() {
    this.setState({
      legal: true
    });
  },
  render: function (){
    return this.state.legal ? <DataAndLogic /> : <Landing handleLegalSubmit={this.handleLegalSubmit}/>
  }
});

React.AppRegistry.registerComponent('drinkSync', () => drinkSync);
