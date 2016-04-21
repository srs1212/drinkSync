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
  ActivityIndicatorIOS,
  Image
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'stretch',
    // paddingTop: 10
  },
  containerdataNotReady: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
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
  imageContainer: {
    flex: 1,
    // paddingTop: 10
    // remove width and height to override fixed static size
    // width: null,
    // height: null,
  }
});
// this.props.drink.drinkName && 
var ShowDrink = React.createClass({
  dataNotReady: function(){
    return (
        <ActivityIndicatorIOS
          style={[styles.containerdataNotReady , this.border('red')]}
          size="large"
          color="black"/>
      )
  },
  showDrink: function(){
    return( 
      <Image source={{uri: 'http://i.imgur.com/G2yKzki.jpg'}} style={[styles.imageContainer, this.border('yellow')]}>
          <View style={[styles.container, this.border('green')]}>
            <View style={[styles.header, this.border('green')]}>
              <View style={[styles.weatherWrapper, this.border('red')]}> 
                <Weather location={this.props.location} temp={this.props.temp}
                 icon={this.props.icon} icon_url={this.props.icon_url}/>
              </View>
              <View style={[styles.drinkNameWrapper, this.border('yellow')]}> 
                <DrinkName image={this.props.drink ? this.props.drink.image : ''} 
                drinkName={this.props.drink ? this.props.drink.drinkName : ''}
                handleNextDrinkButton = {this.props.handleNextDrinkButton} />
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
      </Image>
          )
  },  
  render: function(){
    var  isDataReady = (this.props.location && this.props.drink.drinkName) === '' ? this.dataNotReady() : this.showDrink();
    console.log('in is drinkis ready', this.props.drink.drinkName, this.props.location);
    return (
      isDataReady
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