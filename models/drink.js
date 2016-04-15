var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DrinkSchema = new Schema({
 drinkName: String,
 ingredients: [String],
 recipe: String,
 alcohol: [String],
 image: string
});

module.exports = mongoose.model('Drink', DrinkSchema);

