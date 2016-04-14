'use strict';
var React = require('react-native');
var Button = require('apsl-react-native-button');
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
} = React;


// customize the material design theme




const styles = React.StyleSheet.create({
  containerNav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0 
  },
  buttonWrapperNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 10
  },



});

var Nav = React.createClass({
  render: function (){
  console.log("renderingNav");
    return (
      <View style={[styles.containerNav, testBorder('grey')]}>
            <Text>
                  DrinkSync Nav
            </Text>
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


module.exports = Nav;

