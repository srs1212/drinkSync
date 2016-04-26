'use strict';

var React = require('react-native');
var MainNav = require('./MainNav');
var DrinkList = require ('./DrinkList');
var drinkList = new DrinkList();

var DataAndLogic = React.createClass({
  getInitialState: function(){
    console.log("get initial state");
    return {
      location: '',
      userLocationLat: null,
      userLocationLon: null,
      temp: 0,
      precip: 0,
      icon: null,
      date: null,
      day: null,
      initialLoad: true,
      icon_url: '',
      mainNavPage: 1,
      currentDrinkName: '',
      filterAlcohol: [],
      drink: {
        drinkName: '',
        image: '',
        ingredients: [],
        recipe: '',
        alcohol: []
        },
       sortedDrinkList: [],
       filteredDrinkList: [],
       currentDrinkIndex: 0
      }   
  },
  componentWillMount: function(){
    this.fetchGeolocation()
  }, 
  componentDidMount: function(){
    this.fetchWeatherData()
  },  
  fetchGeolocation: function(){
    var userLocationLat = this.props.initialPosition.coords.latitude
    var userLocationLon = this.props.initialPosition.coords.longitude
    this.setState({
      userLocationLat: userLocationLat,
      userLocationLon: userLocationLon
    });
  },

  fetchWeatherData: function(arg){
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
      // console.log('sorted drink', sortedDrinkList[0].drinkName);
      this.setState({
        temp: temp,
        location: location,
        precip: precip, 
        day: day,
        season: season,
        time: time,
        icon: icon,
        icon_url: icon_url,
 
      });
      if(arg){
        this.setState({sortedDrinkList: arg })
        this.setState({drink: this.state.sortedDrinkList[0] })
        } else  {
        this.setState ({sortedDrinkList: sortedDrinkList, drink: bestDrink,})
        }
    })
    .catch((error) => {
      console.warn(error);
    });
  },
  handleFilterAlcoholState: function(item){
    // console.log("handling filter etoh state");
    this.setState({
      filterAlcohol: item,
      mainNavPage: 0
    });
  },
  handleApplyFilterButton: function(){
    var sortedDrinkList = this.state.sortedDrinkList;
    var filterAlcohol = this.state.filterAlcohol;
    // console.log("sortedDrinkList?", sortedDrinkList, "filtered etoh", filterAlcohol);
    var filteredDrinkList = sortedDrinkList.filter( function(drink) {
      return drink.alcohol.every( function(alc) {
        return !filterAlcohol.includes(alc);
      });
    });
    this.fetchWeatherData(filteredDrinkList); 
    console.log('filtered drink', filteredDrinkList[0].drinkName);
    this.setState({
      mainNavPage: 1,
      initialLoad: false,
    });
  },  
  handleNextDrinkButton: function(){
    // console.log("Length", this.state.sortedDrinkList.length );
    var sortedDrinkList = this.state.sortedDrinkList;
    var newIndex = this.state.currentDrinkIndex + 1;
    console.log("next drink here", newIndex, sortedDrinkList.length);
    if(newIndex < this.state.sortedDrinkList.length){
      return this.setState({
            drink: sortedDrinkList[newIndex],
            currentDrinkIndex: newIndex });
      } else {
      alert ("You've reached the last BEST DRINK");
    }
      
  },
   handlePreviousDrinkButton: function(){
        var sortedDrinkList = this.state.sortedDrinkList;
    var newIndex = this.state.currentDrinkIndex - 1;
    console.log("previous drink here", newIndex, sortedDrinkList.length);
    if(newIndex >= 0){
      return this.setState({
            drink: sortedDrinkList[newIndex],
            currentDrinkIndex: newIndex });
      } else {
      alert ("You're at the BEST DRINK!");
    }
      
  },

  render: function(){
    // var sortedDrink = this.props.sortedDrinkList.length;
    // var filteredDrink = this.props.filteredDrinkList.length;
    // console.log('in data and logic', sortedDrink, filteredDrink );
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
              sortedDrinkList = {this.state.sortedDrinkList}
              filteredDrinkList = {this.state.filteredDrinkList}
              handleFilterAlcoholState = {this.handleFilterAlcoholState}
              handleApplyFilterButton = {this.handleApplyFilterButton}
              handleNextDrinkButton = {this.handleNextDrinkButton}
              handlePreviousDrinkButton = {this.handlePreviousDrinkButton}
              />
          )
    }
}); 


module.exports = DataAndLogic;
