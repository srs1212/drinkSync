'use strict';

var React = require('react-native');
var MainNav = require('./MainNav');

// var ratingFactors = require ('./RatingFactors');
// var userLocation = '59802';

var userLocationLat = '37.785834';
var userLocationLon = '-122.406417';
// var fetchUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=' + userLocation + ',us&appid=22a1e092f3c7508f8ed419614d5ae7b5';
var DrinkList = require ('./DrinkList');

var drinkList = new DrinkList();

var DataAndLogic = React.createClass({
  getInitialState: function(){
    return {
      location: '',
      userLocationLat: 46.93,
      userLocationLon: -114.1,
      temp: 0,
      precip: 0,
      icon: null,
      date: null,
      day: null,
      initialLoad: true,
      icon_url: '',
      mainNavPage: 1,
      filterAlcohol: [],
      drink: {
        drinkName: '',
        image: '',
        ingredients: [],
        recipe: '',
        alcohol: []
        },
       sortedDrinkList: []
      }   
  },
  componentDidMount: function(){
    this.fetchGeolocation()
    this.fetchWeatherData()
  },  
  handleFilterAlcoholState: function(item){
    console.log("handling filter etoh state");
    this.setState({
      filterAlcohol: item,
      mainNavPage: 0
    });
  },
  handleApplyFilterButton: function(){
    //moves page to drink page - now we have to remove those 'items' from the actual array
    //use sortedDrinkList and filter through on each
    console.log('applying filter button');
    this.setState({
      mainNavPage: 1,
      initialLoad: false,
    });
  },  
  handleNextDrinkButton: function(){
    // console.log("Length", this.state.sortedDrinkList.length );
    if(this.state.sortedDrinkList.length === 1){
      alert ("You've reached the end of our drink list");
      return;
    } 
    this.state.sortedDrinkList.shift(); 

    var nextDrink = this.state.sortedDrinkList;

    this.setState({
      drink: nextDrink[0],
    });
  },

  fetchGeolocation: function(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = position;
        var userLocationLat = initialPosition.coords.latitude;
        var userLocationLon = initialPosition.coords.longitude;
        this.setState({
          userLocationLat: userLocationLat,
          userLocationLon: userLocationLon
        });
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  },
  fetchWeatherData: function(){
    var fetchUrl = 'http://api.wunderground.com/api/0cbb2794fb744644/conditions/q/' + this.state.userLocationLat + ',' + this.state.userLocationLon + '.json';

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
      var sortedDrinkList = drinkList.getSortedDrinkList(temp, precip, day, season, time);
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
        drink: bestDrink,
        sortedDrinkList: sortedDrinkList
      });
    })
    .catch((error) => {
      console.warn(error);
    });
  },


  render: function(){
    // console.log('user lat & lon', this.state.userLocationLat, this.state.userLocationLon);
      console.log("DATE from D&L", this.state.dateToDisplay, "day from D&L", this.state.day);
      return( 
              <MainNav
              location = {this.state.location}
              temp = {this.state.temp}
              precip = {this.state.precip}
              icon = {this.state.icon}
              icon_url = {this.state.icon_url}
              dateToDisplay = {this.state.dateToDisplay}
              sweetValue = {this.state.sweetValue}
              drink = {this.state.drink}
              filterAlcohol = {this.state.filterAlcohol}
              mainNavPage = {this.state.mainNavPage}
              initialLoad = {this.state.initialLoad}
              handleFilterAlcoholState = {this.handleFilterAlcoholState}
              handleApplyFilterButton = {this.handleApplyFilterButton}
              handleNextDrinkButton = {this.handleNextDrinkButton}
              />
          )
    }
}); 


module.exports = DataAndLogic;
