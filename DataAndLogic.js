'use strict';

var React = require('react-native');
var MainNav = require('./MainNav');
var ratingFactors = require ('./RatingFactors');
var userLocation = '59802';
var fetchUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=' + userLocation + ',us&appid=22a1e092f3c7508f8ed419614d5ae7b5';
var DrinkData = require ('./DrinkData');

var DataAndLogic = React.createClass({
  getInitialState: function(){
    return {
      location: '',
      temp: 0,
      drinkName: 'Between the Sheets',
      image: 'http://recipes-drinks.ru/coctails/between-the-sheets.png',
      ingredients: ['lemon juice'],
      recipe: '',
      alcohol: [''],
      }
  },
  componentDidMount: function(){
   this.fetchWeatherData()

  },
  convertToFahrenheit: function(value) {
    return ((value - 273.15)*9/5) + 32;
  },
  fetchWeatherData: function(){
    var location = ''
    var temp = 0
    fetch(fetchUrl)
    .then((response) => response.json())
    .then((responseText) => {
      console.log(responseText);
      location = responseText.name;
      temp = this.convertToFahrenheit(responseText.main.temp)
      this.setState({
        location: location,
        temp: temp
      });
    })
    .catch((error) => {
      console.warn(error);
    });
  },

  weatherValue: function(temp){
    var Weather = this.props.drinkRating.weatherValue;
    if ( this.props.temp <= 29 ){
      return Weather.wA(value);
    } else if ( this.props.temp >= 30 && temp <= 49 ){
        return Weather.wB(value);
    } else if ( this.props.temp >= 50 && temp <= 80 ){
      return Weather.wC(value);
    } else {
      return Weather.wD(value);
    }
  },

  render: function(){
      return( 
            <MainNav
            location = {this.state.location}
            temp = {this.state.temp}
            drinkName = {this.state.drinkName }
            image = {this.state.image}
            recipe = {this.state.recipe}
            ingredients = {this.state.ingredients}
            />
          )
    }
}); 


module.exports = DataAndLogic;
