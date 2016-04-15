'use strict';

var React = require('react-native');
var Weather = require('./Weather');

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
    flex: 8
  },
  drinkDetails: { 
    flex: 10,
    flexDirection: 'row',
  },
  drinkNameWrapper: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  weatherWrapper: { 
    flex: 3,
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
    return( 
          <View style={styles.container}>
            <View style={[styles.header, this.border('green')]}>
              <View style={[styles.drinkNameWrapper, this.border('yellow')]}> 
                <Text>
                  DRINK NAME
                </Text>
              </View>
              <View style={[styles.weatherWrapper, this.border('red')]}> 
                <Weather location={this.props.location} temp={this.props.temp}/>
              </View>
            </View>
            <View style={[styles.drinkDetails, this.border('blue')]}> 
              <View style={[styles.ingredientWrapper, this.border('green')]}>
                <Text>
                  Ingredients
                </Text>
              </View>
             <View style={[styles.recipeWrapper, this.border('yellow')]}>
                <Text>
                  Recipe
                </Text>
             </View>
            </View>
          </View>
          )
  },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
}); 


module.exports = ShowDrink;