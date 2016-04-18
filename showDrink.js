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
  },
  recipeWrapper: { 
    flex: 1,
  },
});
var ShowDrink = React.createClass({
  render: function(){
    console.log('in ShowDrink', this.props.drink);

    return( 
          <View style={styles.container}>
            <View style={[styles.header, this.border('green')]}>
              <View style={[styles.weatherWrapper, this.border('red')]}> 
                <Weather location={this.props.location} temp={this.props.temp}
                 icon={this.props.icon} icon_url={this.props.icon_url}/>
              </View>
              <View style={[styles.drinkNameWrapper, this.border('yellow')]}> 
                <DrinkName image={this.props.drink ? this.props.drink.image : ''} 
                drinkName={this.props.drink ? this.props.drink.drinkName : ''} />
              </View>
            </View>
            <View style={[styles.drinkDetails, this.border('blue')]}> 
              <View style={[styles.ingredientWrapper, this.border('green')]}>
                  <Ingredients ingredients={this.props.drink ? this.props.drink.ingredients : ''} />
              </View>
              <View style={[styles.recipeWrapper, this.border('yellow')]}>
                  <Recipe recipe={this.props.drink ? this.props.drink.recipe : ''} />
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