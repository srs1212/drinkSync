'use strict';
var React = require('react-native');
var Weather = require('./Weather');
var DrinkName = require('./DrinkName');
var ImageAndIngredients = require('./ImageAndIngredients');
var ShowNextButton = require ('./ShowNextButton');
var Ingredients = require('./Ingredients');
var Recipe = require('./Recipe');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var HeaderLogo = require('./HeaderLogo');


var {
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS,
  Image
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  drinkNameWrapper: { 
    flex: 1,
  },
  drinkImageIngredientsWrapper: { 
    flex: 4,
  },
  drinkRecipe: { 
    flex: 2,
    paddingBottom: 10
  },  
  // ingredRecipText: {
  //   color: '#6f0909',
  //   fontFamily: 'Cochin-BoldItalic',
  //   fontSize: 20 
  // },

  //     ingredientWrapper: { 
  //       flex: 1,
  //       paddingLeft: 10
  //     },
  //     recipeWrapper: { 
  //       flex: 1,
  //       paddingRight: 10
  //     },
  
});

var DrinkDetails = React.createClass({
  render: function(){
    var drinkName = this.props.drink.drinkName;
    var recipe = this.props.drink.recipe
    var ingredients = this.props.drink.ingredients
    var image = this.props.drink.image

    // console.log("in drink Details", ingredients);
    return(   
          <View style={[styles.container, this.border('green')]}>

                <View style={[styles.drinkNameWrapper, this.border('pink')]}> 
                  <DrinkName drinkName={drinkName} />
                </View>
                <View style={[styles.drinkImageIngredientsWrapper, this.border('blue')]}> 
                  <ImageAndIngredients 
                  image={image}
                  ingredients={ingredients} />
                </View>
                <View style={[styles.drinkRecipe, this.border('purple')]}>
                  <Recipe recipe={recipe}/>
                </View>

          </View>
          )
  },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 0
    }
  }
}); 
module.exports = DrinkDetails;