// {F} Var weatherValue = if F >-80 && F<29 return value FA, else if F >== 30 && F<50 return value FB, else if F >== 51 && F<80 return value FC, else if  F >== 80 return FD			
// var weatherValueRating = weatherValue * 10			
// var totalRating = weatherValueRating + sunnyRating + precipRating + dayRating + todRating 

// ALL RATINGS ON SCALE FROM 1 TO 5
// IMPORTANCE - Weather * 10, Cloudy * 2, Precip * 3, Season * 7, Day * 6, Time * 8

// weather keys 	wA = < 29 deg.
// 	 			wB = 30-49
// 	 			wC = 50-80
// 	 			wD = 81+
// cloudy keys		cA = <30%
// 				cB = 31-65%
// 				cC = 66-100%
// precip keys		pA = 0-20% chance
// 				pB = 21-60% chance
// 				pC = 61-100% chance
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
//  	cloudyValue:{
//  		cA: Number,
//  		cB: Number,
//  		Cc: Number
//  	},
//  	precipValue:{
//  		pA: Number,
//  		pB: Number,
//  		pC: Number
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

// var weatherValue = function (temp){
// 	var Weather = this.props.drinkRating.weatherValue;
// 	if ( this.props.temp <= 29 ){
// 		return Weather.wA(value);
// 	} else if ( this.props.temp >= 30 && temp <= 49 ){
// 	   	return Weather.wB(value);
// 	} else if ( this.props.temp >= 50 && temp <= 80 ){
// 		return Weather.wC(value);
// 	} else {
// 		return Weather.wD(value);
// 	}
// };

// var cloudyValue = function (cloud){
// 	var Cloudy = this.props.cloudRating.cloudValue;
// 	if ( this.props.cloud <= 30){
// 		return Cloudy.cA(value);
// 	} else if ( this.props.cloud >= 31 && cloud <= 65 ){
// 	   	return Cloudy.cB(value);
// 	} else {
// 		return Weather.wC(value);
// 	}
// };


// 			