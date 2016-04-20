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
      date: null,
      icon_url: '',
      mainNavPage: 1,
      filterAlcohol: [],
      drink: {
        drinkName: '',
        image: '',
        ingredients: [],
        recipe: '',
        alcohol: []
        }
      }
  },
  componentDidMount: function(){
    this.fetchWeatherData()
  },  
  handleFilterAlcoholState: function(item){
    this.setState({
      filterAlcohol: item,
      mainNavPage: 0
    });
  },
  handleApplyFilterButton: function(){
    this.setState({
      mainNavPage: 1
    });
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
      temp = responseText.current_observation.temp_f;
      location = responseText.current_observation.display_location.city;
      precip = responseText.current_observation.precip_1hr_in;
      icon = responseText.current_observation.icon;
      icon_url = responseText.current_observation.icon_url;
      var bestDrink = drinkList.bestDrink(temp, precip);
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
      return( 
              <MainNav
              location = {this.state.location}
              temp = {this.state.temp}
              precip = {this.state.precip}
              icon = {this.state.icon}
              icon_url = {this.state.icon_url}
              sweetValue = {this.state.sweetValue}
              drink = {this.state.drink}
              filterAlcohol = {this.state.filterAlcohol}
              mainNavPage = {this.state.mainNavPage}
              handleFilterAlcoholState = {this.handleFilterAlcoholState}
              handleApplyFilterButton = {this.handleApplyFilterButton}
              />
          )
    }
}); 


module.exports = DataAndLogic;
