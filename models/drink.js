var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DrinkSchema = new Schema({
 drinkName: String,
 ingredients: [String],
 recipe: String,
 alcohol: [String],
 image: String,
 sweetNeat: String,
 drinkRating: {
 	 weatherValue:{
 		wA: Number,
 		wB: Number,
 		wC: Number,
 		wD: Number
 	},

 	precipValue:{
 		pA: Number,
 		pB: Number,
 		pC: Number
 	},
 	seasonValue:{
 		sSp: Number,
 		sSu: Number,
 		sFa: Number,
 		sWi: Number
 	},
 	dayValue:{
 		dA: Number,
 		dB: Number,
 		dC: Number
 	},
	timeValue:{
 		tM: Number,
 		tA: Number,
 		tN: Number,
 		wS: Number
 	}, 

 }
});

module.exports = mongoose.model('Drink', DrinkSchema);

