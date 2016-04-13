'use strict';
var React = require('react-native');
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
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  header: {
  	color: 'blue',
  	fontSize: 30,
  	margin: 80,
  	flex: 1,
  	justifyContent: 'flex-start',
    alignItems: 'center',
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
			<View>
				<Text style={styles.header}>
						filter Drink Data File
         </Text>
			</View>
			);
	}
});




module.exports = filterDrinkData;




