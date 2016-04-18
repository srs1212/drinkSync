'use strict';
var React = require('react-native');
var Weather = require('./Weather');
var DrinkName = require('./DrinkName');
var Ingredients = require('./Ingredients');
var Recipe = require('./Recipe');

var {
  StyleSheet,
  Text,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'stretch'
  },
  header: { 
    flex: 1
  },
  drinkDetails: { 
    flex: 1,
    flexDirection: 'row',
  },
  drinkNameWrapper: { 
    flex: 1,
  },
  weatherWrapper: { 
    flex: 1,
  },
  ingredientWrapper: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  recipeWrapper: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
var ShowDrink = React.createClass({
  render: function(){
    console.log('in ShowDrink', this.props.image);
    return( 
          <View style={styles.container}>
            <View style={[styles.header, this.border('green')]}>
              <View style={[styles.weatherWrapper, this.border('red')]}> 
                <Weather location={this.props.location} temp={this.props.temp}/>
              </View>
              <View style={[styles.drinkNameWrapper, this.border('yellow')]}> 
                <DrinkName image={this.props.image} drinkName={this.props.drinkName} />
              </View>
            </View>
            <View style={[styles.drinkDetails, this.border('blue')]}> 
              <View style={[styles.ingredientWrapper, this.border('green')]}>
                <Ingredients image={this.props.image} Ingredients={this.props.ingredients} />
              </View>
             <View style={[styles.recipeWrapper, this.border('yellow')]}>
                <Recipe image={this.props.image} Recipe={this.props.recipe} />
             </View>
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
module.exports = ShowDrink;