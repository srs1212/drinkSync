'use strict';
var React = require('react-native');
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
 


var DrinkComp = React.createClass({
  render: function (){
    return (
       <View > 
        <FilterDrinkData />
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

module.exports = DrinkComp;