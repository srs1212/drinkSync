'use strict';
//DrinkList is old logic.js - has Data in json but also functionality.

var AllDrinks = require('./AllDrinks');
var theDate = new Date();
var dayDate = theDate.getDate();
var monthDate = theDate.toString().substr(4,4);
var monthForSeason = theDate.getMonth();

var DrinkList = function(drinkData){ //the _ in _allDrinks is syntax suggesting internal data usage.
 	this._allDrinks = drinkData || AllDrinks;
};
DrinkList.prototype.bestDrinkOfTemp = function(temp){
	return this._allDrinks[0];
};

var alcoholFilter = function(){ //filters drinks and excludes those from computations
};

var theSeason = function(){
  if (monthForSeason === 11 || monthForSeason === 0 || monthForSeason ===1) {
    return "winter";
  } else  if (monthForSeason === 2 || monthForSeason === 3 || monthForSeason === 4){
    return "spring";
  } else if (monthForSeason === 5 || monthForSeason === 6 || monthForSeason === 7) {
    return "summer";
  } else if (monthForSeason === 8 || monthForSeason === 9 || monthForSeason === 10) {
    return "fall";
  }
};

var weatherValue = function (){ //oooof no can do. i why declare wvc and wvp?? 
	//no idea on declaring those to what 
		var dr = this._allDrinks.reduce(function(temp, prev, cur){
			var wvc = this._allDrinks.drinkRating.weatherValue;
			var wvp = DrinkData.drinkRating.weatherValue;
			if ( temp <= 29 ){
				return WeatherLoop.wCold;
			} else if ( temp >= 30 && temp <= 49 ){
			   	return WeatherLoop.wMod;
			} else if ( temp >= 50 && temp <= 80 ){
				return WeatherLoop.wWarm;
			} else {
				return WeatherLoop.wHot;
			}
		})
		return dr;
};

var	precipValue = function (){// returns precip rating for each drink * importance 

		if ( this.props.precip === 0){
			return PrecipLoop.pNone;
		} else {
		   	return PrecipLoop.pSome;
		} 
};

var seasonValue = function (){ //returns season rating for each drink * importance
			if ( theSeason() === "winter"){
				return SeasonLoop.sWin;
			} else if( theSeason() === "spring"){
			   	return SeasonLoop.sSpr;
			} else if( theSeason() === "summer") {
				return SeasonLoop.sSum;
			} else if( theSeason() === "fall"){
				return SeasonLoop.sFal;
			}
};

var dayValue = function (){ //returns day rating for each drink * importance
	};

var timeValue = function (){ //returns time value for each drink * importance
};

var sweetValue = function(){ //returns sweetValue (user entered) for each drink * importance
};

var totalDrinkRating = function(){ // sums the 6 Values for each drink
};

var bestDrink = function(){ // sorts and displays highest rated drinks
};


module.exports = DrinkList;







			