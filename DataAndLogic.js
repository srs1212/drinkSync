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

// smallest data
//       drink: {
//         drinkName: 'Kir',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Mai_Tai.jpg/220px-Mai_Tai.jpg',
//         ingredients: ['Gin'],
//         recipe: 'Mix and serve well chilled.',
//         alcohol: []
//         }

var DataAndLogic = React.createClass({
  getInitialState: function(){
    return {
      location: '',
      temp: 0,
      precip: 0,
      icon: null,
      date: null,
      day: null,
      icon_url: '',
      mainNavPage: 1,
      filterAlcohol: [],
      drink: {
        drinkName: 'Kentucky Corpse Reviver',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Cloverclub.jpg/220px-Cloverclub.jpg',
        ingredients: ["Sugar syrup (according to individual preference of sweetness)", "½ oz Tequila","½ oz Vodka","½ oz White rum","½ oz Triple sec","½ oz Gin","¾ oz Lemon juice","1 oz Gomme Syrup","1 dash of Cola"],
        recipe: 'Combine all ingredients with 2 scoops of crushed ice in a blender, blend briefly, then pour into the volcano bowl. Pour some rum into the central crater of the volcano bowl and light it. For garnish score pineapple or orange slices with a knife and insert onto rim of bowl; optionally add maraschino cherries to the main drink. Multiply recipe to adjust to the size of the container (e.g. x2 for a 32-US-fluid-ounce (950 ml) volcano bowl).',
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
  handleNextDrinkButton: function(){
    // console.log('in next drink button');
    this.setState({
      drink: {
        drinkName: 'Kir',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Mai_Tai.jpg/220px-Mai_Tai.jpg',
        ingredients: ['Gin'],
        recipe: 'Mix and serve well chilled.',
        alcohol: []
        },
    });
  },
  fetchWeatherData: function(){
    var temp = 0
    var location = ''
    var precip = 0
    var day = ''
    var season = ''
    var time = ''
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
      var bestDrink = drinkList.getSortedDrinkList(temp, precip, day, season, time)[0];
      this.setState({
        temp: temp,
        location: location,
        precip: precip, 
        day: day,
        season: season,
        time: time,
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
              handleNextDrinkButton = {this.handleNextDrinkButton}
              />
          )
    }
}); 


module.exports = DataAndLogic;
