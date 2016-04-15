'use strict';
var React = require('react-native');
var Nav = require('./nav');
var Landing = require('./landing');
var ScrollBar = require('./scrollBar');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component,
  Button,
} = React;

const styles = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


});


var drinkSync = React.createClass({
  getInitialState: function() {
    return {
      legal: false
    }
  },
  showWhichComponent: function() {
    return this.state.legal ? <ScrollBar /> : <Landing handleLegalSubmit={this.handleLegalSubmit} handleNotLegalSubmit={this.handleNotLegalSubmit}/>
  },
  handleLegalSubmit: function() {
    this.setState({
      legal: true
    })
  },
  handleNotLegalSubmit: function() {
    console.log("inside not legal");
  },
  render: function (){
    return (
   this.showWhichComponent()
    );
  }
});

var testBorder = function(color){
  return {
    borderColor: color,
    borderWidth: 2
  }
}



React.AppRegistry.registerComponent('drinkSync', () => drinkSync);
