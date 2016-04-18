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
        wCold: Number,
        wMod: Number,
        wWarm: Number,
        wHot: Number
      },

      precipValue:{
        pNone: Number,
        pSome: Number,
 
      },
      seasonValue:{
        sSpr: Number,
        sSum: Number,
        sFal: Number,
        sWin: Number
      },
      dayValue:{
        dMTRS: Number,
        dW: Number,
        dFS: Number
      },
      timeValue:{
        tMrn: Number,
        tAft: Number,
        tNt: Number,
        wSleep: Number
      }, 
 }
});

module.exports = mongoose.model('Drink', DrinkSchema);

