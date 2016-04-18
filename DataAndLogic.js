'use strict';

var React = require('react-native');
var MainNav = require('./MainNav');
// var ratingFactors = require ('./RatingFactors');
// var userLocation = '59802';
var userLocationLat = '46.93';
var userLocationLon = '-114.1';
// var fetchUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=' + userLocation + ',us&appid=22a1e092f3c7508f8ed419614d5ae7b5';
var fetchUrl = 'http://api.wunderground.com/api/0cbb2794fb744644/conditions/q/' + userLocationLat + ',' + userLocationLon + '.json';
var DrinkList = require ('./DrinkList');

var drinkList = new DrinkList();

var DataAndLogic = React.createClass({
  getInitialState: function(){
    return {
      location: '',
      temp: 0,
      precip: 0,
      icon: null,
      icon_url: '',
      date: null,
      drink: {
        drinkName: 'Between the Sheets',
        image: 'http://recipes-drinks.ru/coctails/between-the-sheets.png',
        ingredients: ['lemon juice'],
        recipe: '',
        alcohol: ['']
        }

      }
  },
  componentDidMount: function(){
   this.fetchWeatherData()

  },

  fetchWeatherData: function(){
    var temp = 0
    var location = ''
    var precip = 0
    var icon = ''
    var icon_url = ''
    fetch(fetchUrl)
    .then((response) => response.json())
    .then((responseText) => {
      // console.log("Data Here", responseText.current_observation.icon_url);
      temp = responseText.current_observation.temp_f;
      location = responseText.current_observation.display_location.city;
      precip = responseText.current_observation.precip_1hr_in;
      icon = responseText.current_observation.icon;
      icon_url = responseText.current_observation.icon_url;
      var bestDrink = drinkList.bestDrinkOfTemp(temp);
      this.setState({
        temp: temp,
        location: location,
        precip: precip, 
        icon: icon,
        icon_url: icon_url,
        drink: bestDrink
      });
    })
    .catch((error) => {
      console.warn(error);
    });
  },


  render: function(){
      console.log('in DataAndLogic', this.state.recipe);
      return( 
              <MainNav
              location = {this.state.location}
              temp = {this.state.temp}
              precip = {this.state.precip}
              icon = {this.state.icon}
              icon_url = {this.state.icon_url}
              drink = {this.state.drink}
              />
          )
    }
}); 


module.exports = DataAndLogic;
