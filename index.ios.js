'use strict';
var React = require('react-native');
var Landing = require('./landing');
var DrinkComp = require('./drinkComp');

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




var drinkSync = React.createClass({
  getInitialState: function() {
    return {
      legal: true
    }
  },
  showWhichComponent: function() {
    return this.state.legal ? <DrinkComp /> : <Landing handleLegalSubmit={this.handleLegalSubmit} handleNotLegalSubmit={this.handleNotLegalSubmit}/>
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
     <View > 
      {this.showWhichComponent()}
     </View>      
    );
  }
});

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

React.AppRegistry.registerComponent('drinkSync', () => drinkSync);
