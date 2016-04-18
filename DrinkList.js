'use strict';
//DrinkList is old logic.js - has Data in json but also functionality.

var AllDrinks = require('./AllDrinks');
var theDate = new Date();
var dayDate = theDate.getDate();
var monthDate = theDate.toString().substr(4,4);
var monthForSeason = theDate.getMonth();

var DrinkList = function(drinkData){
 	this._allDrinks = drinkData || AllDrinks;
};
DrinkList.prototype.bestDrinkOfTemp = function(temp){
	return this._allDrinks[0];
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

var weatherValue = function (){
		var temp = this.props.temp;
		for (var i = 0; i <DrinkData.length; i++) {
			var WeatherLoop = DrinkData[i].drinkRating.weatherValue;
			if ( temp <= 29 ){
				return WeatherLoop.wCold;
			} else if ( temp >= 30 && temp <= 49 ){
			   	return WeatherLoop.wMod;
			} else if ( temp >= 50 && temp <= 80 ){
				return WeatherLoop.wWarm;
			} else {
				return WeatherLoop.wHot;
			}
		}
};

var	precipValue = function (){
	var precip = this.props.precip;
	for (var i = 0; i <DrinkData.length; i++) {
	var PrecipLoop = DrinkData[i].drinkRating.precipValue;
		if ( this.props.precip === 0){
			return PrecipLoop.pNone;
		} else {
		   	return PrecipLoop.pSome;
		} 
	}
};

var seasonValue = function (){ 
		var SeasonLoop = DrinkData[i].drinkRating.seasonValue;
		for (var i = 0; i < DrinkData.length; i++) {
			if ( theSeason() === "winter"){
				return SeasonLoop.sWin;
			} else if( theSeason() === "spring"){
			   	return SeasonLoop.sSpr;
			} else if( theSeason() === "summer") {
				return SeasonLoop.sSum;
			} else if( theSeason() === "fall"){
				return SeasonLoop.sFal;
			}
	  	}
	
};



module.exports = DrinkList;







			