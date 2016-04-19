'use strict';
//DrinkList is old logic.js - has Data in json but also functionality.

var AllDrinks = require('./AllDrinks');
var theDate = new Date();
var dayDate = theDate.getDate();
var monthDate = theDate.toString().substr(4,4);
var monthForSeason = theDate.getMonth();
var ratingFactors = [{
 	weatherValue: 10,
 	precipValue: 3,
 	seasonValue: 7,
 	dayValue: 6,
 	timeValue: 8
}];

var DrinkList = function(drinkData){ //the _ in _allDrinks is syntax suggesting internal data usage.
 	this._allDrinks = drinkData || AllDrinks;
};
DrinkList.prototype.bestDrink = function(temp, precip){ //temp passed
 	return this._allDrinks.reduce(function(prev, cur){
		var scoreC = drinkScore(cur, temp, precip);
		var scoreP = drinkScore(prev, temp, precip);
		return scoreC > scoreP ? cur : prev;
	  });

};

// DrinkList.prototype.bestDrink = function(precip){ //precip
//  	return this._allDrinks.reduce(function(prev, cur){
// 		var pvc = precipValue(precip, cur);
// 		var pvp = precipValue(precip, prev);
// 		return pvc > pvp ? cur : prev;
// 	  });	 
// };
function drinkScore (drink, temp, precip) {
	precip = precip || 0;
	var score = weatherValue(drink, temp) + precipValue(drink, precip);
	console.log("SCORE", drink.drinkName, score);
	return score;
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

function weatherValueRated (drink, temp){
	return weatherValue * ratingFactors.weatherValue;
};

var	precipValue = function (drink, precip){// returns precip rating for each drink  
	// console.log("DRINK", drink.drinkRating);
	var pv = drink.drinkRating.precipValue;
	console.log('PV', pv, drink.drinkName);
	if ( precip > .0001){
		return pv.pSome;
	} else {
		return pv.pNone;
	} 
};

// var seasonValue = function (){ //returns season rating for each drink * importance
// 			if ( theSeason() === "winter"){
// 				return SeasonLoop.sWin;
// 			} else if( theSeason() === "spring"){
// 			   	return SeasonLoop.sSpr;
// 			} else if( theSeason() === "summer") {
// 				return SeasonLoop.sSum;
// 			} else if( theSeason() === "fall"){
// 				return SeasonLoop.sFal;
// 			}
// 	  	}	
// };

// var dayValue = function (){ //returns day rating for each drink * importance
// 	};

// var timeValue = function (){ //returns time value for each drink * importance
// };



module.exports = DrinkList;







			