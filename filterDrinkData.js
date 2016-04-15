'use strict';
var React = require('react-native');
var Nav = require('./nav');
var Navtwo = require('./navtwo');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
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



// customize the material design theme




const styles = React.StyleSheet.create({

  containerD: {
    flex: 1,
    flexDirection: 'column',
    width: windowSize.width,
    height: windowSize.height,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: windowSize.width,
    height: windowSize.height
  },

  navHeight: {
    flex: .2,
    width: windowSize.width,
    backgroundColor: 'transparent',
    alignItems: 'center', 
    justifyContent: 'center'
  }, 

  bodyHeight: {
    flex: .8,
    width: windowSize.width,
    alignItems: 'center',
    justifyContent: 'center'
  },

  halfHeight: {
    flex: .5,
    backgroundColor: 'grey'
  },

  quarterHeight: {
    flex: .25,
    backgroundColor: 'grey'
  },


});

var userLocation = '59802';
var fetchUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=' + userLocation + ',us&appid=22a1e092f3c7508f8ed419614d5ae7b5';

var filterDrinkData = React.createClass({
  getInitialState: function(){
    return {
      weather: null,
      }
  },

  fetchWeatherData: function(){

    fetch(fetchUrl)
    .then((response) => response.json())
    .then((responseText) => {
      console.log(this.convertToFahrenheit(responseText.main.temp));
    })
    .catch((error) => {
      console.warn(error);
    });
  },
  convertToFahrenheit: function(value) {
    return ((value - 273.15)*9/5) + 32;
  },

  componentDidMount: function(){
    console.log("comp did mount");
    this.fetchWeatherData();
  },
 
	render: function (){
	console.log("hello world");
		return (
			<View style={[ styles.containerD, testBorder('yellow')]}>
          <View style={[ styles.navHeight, testBorder('red')]}>
            <Nav/>
          </View>
          <View style={[testBorder('pink'), styles.bodyHeight]}>
    				<Text>
    						{this.convertToFahrenheit(283)}
             </Text>
    			</View>
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




module.exports = filterDrinkData;




