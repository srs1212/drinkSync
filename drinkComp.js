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
 


const style = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  },
  header: {
    color: 'blue',
    fontSize: 50,
    margin: 80
  }
});

var DrinkComp = React.createClass({
  render: function (){
    return (
      <View style={style.header}>
        <FilterDrinkData />
      </View>
      );
  }
});



module.exports = DrinkComp;