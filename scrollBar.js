'use strict';
var React = require('react-native');
var Nav = require('./nav');
var Navtwo = require('./navtwo');
var FilterDrinkData = require ('./filterDrinkData');
// var Button = require('apsl-react-native-button');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component,
} = React;
 


var ScrollBar = React.createClass({
  render: function (){
    return (

        <Navtwo/>


      );
  }
});

var testBorder = function(color){
  return {
    borderColor: color,
    borderWidth: 2
  }
}

module.exports = ScrollBar;