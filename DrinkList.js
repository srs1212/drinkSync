'use strict';
//DrinkList is old logic.js - has Data in json but also functionality.

var AllDrinks = require('./AllDrinks');
var theDate = new Date();
var dayDate = theDate.getDate(); //returns day of month ex: April 20, returns 20.
var monthDate = theDate.toString().substr(4,4); //returns shorthand of month name ex: Apr
var dayDay = theDate.toString().substr(0,3);// returns shorthand day, ex: Thu
var timeAmPm = theDate.toLocaleTimeString().replace(/([\d]+:[\d]{2}).*([A-Z]{2}$)/, "$1$2");
var dateToDisplay = "it's "  + timeAmPm + " on " + theDate.toString().substr(0,10);
var monthForSeason = theDate.getMonth();
var hoursForTime = theDate.getHours();
var ratingFactors = {
 	weatherValue: 15,
 	precipValue: 5,
 	seasonValue: 8,
 	dayValue: 11,
 	timeValue: 12
};

var DrinkList = function(drinkData){ //the _ in _allDrinks is syntax suggesting internal data usage.
 	this._allDrinks = drinkData || AllDrinks;
};


DrinkList.prototype.getSortedDrinkList = function(temp, precip, day, season, time) {
	var comparator = function(a, b) {
		var scoreA = drinkScore(a, temp, precip, day, season, time);
		var scoreB = drinkScore(b, temp, precip, day, season, time);
		return scoreB - scoreA;
	};
	var sortedArray = this._allDrinks.sort(comparator);
	console.log(sortedArray);
	return sortedArray;
}

// DrinkList.prototype.bestDrink = function(precip){ //precip
//  	return this._allDrinks.reduce(function(prev, cur){
// 		var pvc = precipValue(precip, cur);
// 		var pvp = precipValue(precip, prev);
// 		return pvc > pvp ? cur : prev;
// 	  });	 
// };   
function drinkScore (drink, temp, precip, day, season, time) {
	precip = precip || 0;
	day = day || 0;
	var score =  weatherValueRated( weatherValue(drink, temp), ratingFactors ) 
				+ precipValueRated(precipValue(drink, precip), ratingFactors )
				+ dayValueRated( dayValue(drink, day), ratingFactors )
				+ seasonValueRated ( seasonValue(drink, season), ratingFactors)
				+ timeValueRated ( timeValue(drink, time), ratingFactors);	
	console.log("SCORE", weatherValueRated( weatherValue(drink, temp), ratingFactors ),
				precipValueRated(precipValue(drink, precip), ratingFactors ),
				dayValueRated( dayValue(drink, day), ratingFactors ),
				seasonValueRated( seasonValue(drink, season), ratingFactors),
				timeAmPm, hoursForTime,
				timeValueRated ( timeValue(drink, time), ratingFactors),
				drink.drinkName, score);

	return score;
};

		
// var alcoholFilter = function(){
// 	if 

// };

var theSeason = function(){
  if (monthForSeason === 11 || monthForSeason === 0 || monthForSeason === 1) {
    return "winter";
  } else  if (monthForSeason === 2 || monthForSeason === 3 || monthForSeason === 4){
    return "spring";
  } else if (monthForSeason === 5 || monthForSeason === 6 || monthForSeason === 7) {
    return "summer";
  } else if (monthForSeason === 8 || monthForSeason === 9 || monthForSeason === 10) {
    return "fall";
  }
};

function weatherValue(drink, temp){
		var wv = drink.drinkRating.weatherValue;
		if ( temp <= 29 ) {
			return wv.wCold;
		} else if ( temp >= 30 && temp <= 49 ) {
		   	return wv.wMod;
		} else if ( temp >= 50 && temp <= 80 ) {
			return wv.wWarm;
		} else {
			return wv.wHot;
		}
};	

function weatherValueRated (wv, rf){
	return wv * rf.weatherValue;
};

var	precipValue = function (drink, precip){// returns precip rating for each drink  
	// console.log("DRINK", drink.drinkRating);
	var pv = drink.drinkRating.precipValue;
	// console.log('PV', pv, drink.drinkName);
	if ( precip > .0001){
		return pv.pSome;
	} else {
		return pv.pNone;
	} 
};

function precipValueRated (pv, rf){
	return pv * rf.precipValue;
};

var seasonValue = function (drink){ //returns season rating for each drink 
	var season = theSeason();
	var sv = drink.drinkRating.seasonValue;
	if ( season === "winter"){
		return sv.sWin;
	} else if( season === "spring"){
	   	return sv.sSpr;
	} else if( season === "summer") {
		return sv.sSum;
	} else if( season === "fall"){
		return sv.sFal;
	} else {
		throw new Error('no season found: ' + season);
	}
};

function seasonValueRated (sv, rf){
	return sv * rf.seasonValue;
};

var dayValue = function (drink, day){ //returns day rating for each drink 
	var dv = drink.drinkRating.dayValue;
	// console.log('the drink value', dayDay, dv, drink.drinkName);
	if ( dayDay === 'Mon' || dayDay === 'Tue' || dayDay === 'Thu' || dayDay === 'Sun' ) {
			return dv.dMTRS;
		} else if ( dayDay === 'Wed' ) {
		   	return dv.dW;
		} else if ( dayDay === 'Fri' || dayDay === 'Sat' ) {
			return dv.dFS;
		}
};	

function dayValueRated (dv, rf){
	return dv * rf.dayValue;
};

var timeValue = function (drink, time){ //returns day rating for each drink 
	var tv = drink.drinkRating.timeValue;
	if ( hoursForTime >= 0 && hoursForTime <= 2) {
			return tv.tNt;
		} else if ( hoursForTime >= 3 && hoursForTime <= 6) {
		   	return tv.tSleep;
		} else if ( hoursForTime >= 7 && hoursForTime <= 11) {
			return tv.tMrn;
		} else if ( hoursForTime >= 12 && hoursForTime <= 16) {
			return tv.tAft;
		} else if ( hoursForTime >= 17 && hoursForTime <= 24) {
			return tv.tNt;
		} else {
			throw new Error('no season found: ' + time);
		}
};	

function timeValueRated (tv, rf){
	return tv * rf.timeValue;
};






module.exports = DrinkList;







			