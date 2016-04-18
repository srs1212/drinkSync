var React = require('react-native');
var DrinkData = require('./DrinkData');	
		
// var totalRating = weatherValueRating + sunnyRating + precipRating + dayRating + todRating 

// ALL RATINGS ON SCALE FROM 1 TO 5
// IMPORTANCE - Weather/temp * 10,  Precip * 3, Season * 7, Day * 6, Time * 8

// weather keys 	wA = < 29 deg.
// 	 			wB = 30-49
// 	 			wC = 50-80
// 	 			wD = 81+
// cloudy keys		cA = <30%
// 				cB = 31-65%
// 				cC = 66-100%
// precip keys		pA = 0 in last hour
// 				pB = >0 in last hour
// season keys    	sSp = spring
// 				sSu = summer
// 				sFa = fall
// 				sWi = winter
// Day key    		dA = Mon, Tues, Thur, Sun
// 				dB = Wed
// 				dC = Fri, Sat
// Time key   		tM = 7:00a -1:00p
// 				tA = 1:01p - 4:59p
// 				tN = 5:00p - 2:00a
// 				tS = 2:01a - 6:59a  (all values 0)
// var DrinkSchema = new Schema({
//  drinkName: String,
//  ingredients: [String],
//  recipe: String,
//  alcohol: [String],
//  image: String,
//  drinkRating: {
//  	 weatherValue:{
//  		wA: Number,
//  		wB: Number,
//  		wC: Number,
//  		wD: Number
//  	},

//  	precipValue:{
//  		pA: Number,
//  		pB: Number,
//  	},
//  	seasonValue:{
//  		sSp: Number,
//  		sSu: Number,
//  		sFa: Number,
//  		sWi: Number
//  	},
//  	dayValue:{
//  		dA: Number,
//  		dB: Number,
//  		dC: Number
//  	},
// 	timeValue:{
//  		tM: Number,
//  		tA: Number,
//  		tN: Number,
//  		wS: Number
//  	}
//  }
// });
// All variables below tested and console logged.  functions not exactly.
var theDate = new Date();
var dayDate = theDate.getDate();
var monthDate = theDate.toString().substr(4,4);
var monthForSeason = theDate.getMonth();
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
//vars below finding assigned values for all drinks for computation
var weatherValue = function (temp){
	var temp = this.props.temp;
	var WeatherLoop = DrinkData[i].drinkRating.weatherValue;
	for (var i = 0; i < DrinkData.length; i++) {
		if ( temp <= 29 ){
			return WeatherLoop.wA;
		} else if ( temp >= 30 && temp <= 49 ){
		   	return WeatherLoop.wB;
		} else if ( temp >= 50 && temp <= 80 ){
			return WeatherLoop.wC;
		} else {
			return WeatherLoop.wD;
		}
	}
};

var precipValue = function (precip){
	var precip = this.props.precip;
	var PrecipLoop = DrinkData[i].drinkRating.precipValue;
	if ( this.props.precip === 0){
		return PrecipLoop.pA;
	} else {
	   	return PrecipLoop.pB;
	} 
};

var seasonValue = function (){ 
	var SeasonLoop = DrinkData[i].drinkRating.seasonValue;
	for (var i = 0; i < DrinkData.length; i++) {
		if ( theSeason() === "winter"){
			return SeasonLoop.sWi;
		} else if( theSeason() === "spring"){
		   	return SeasonLoop.sSp;
		} else if( theSeason() === "summer") {
			return SeasonLoop.sSu;
		} else if( theSeason() === "fall"){
			return SeasonLoop.sFa;
		}
  	}
};


			