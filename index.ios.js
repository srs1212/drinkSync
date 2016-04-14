'use strict';
var React = require('react-native');
var Landing = require('./landing');
var DrinkComp = require('./drinkComp');
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
     <View style={[styles.container, testBorder('black')]}> 
      {this.showWhichComponent()}
     </View>      
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
