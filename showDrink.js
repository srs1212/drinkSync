'use strict';
var React = require('react-native');
var Weather = require('./Weather');
var DrinkName = require('./DrinkName');
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
  containerdataNotReady: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTop: {
    flex: 1
  },
  weatherWrapper: { 
    flex: 1,
  },
  drinkNameWrapper: { 
    flex: 3,
  },
  showNextButton: {
    flex: 1,
  },

  drinkDetails: { 
    flex: 3,
    flexDirection: 'row',
  },
      ingredientWrapper: { 
        flex: 1,
      },
      recipeWrapper: { 
        flex: 1,
      },
  
});
//container -green
  //headertop -blue
  //weatherWrapper red
  //drinkNameWrapper -pink
  //drinkDetails  -blue
    //ingredients -green
    //recipe -yellow

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
      // <Image source={{uri: 'http://i.imgur.com/23jLqI0.jpg'}} style={[styles.imageContainer, this.border('yellow')]}>
          <View style={[styles.container, this.border('green')]}>
            <View style={[styles.headerTop, this.border('blue')]}>
               <HeaderLogo /> 
            </View>
            <View style={[styles.weatherWrapper, this.border('red')]}> 
                <Weather location={this.props.location} temp={this.props.temp}
                 icon={this.props.icon} icon_url={this.props.icon_url} />
            </View>
            <View style={[styles.drinkNameWrapper, this.border('pink')]}> 
                <DrinkName image={this.props.drink ? this.props.drink.image : ''} 
                drinkName={this.props.drink ? this.props.drink.drinkName : ''} />
                
            </View>
           
            <View style={[styles.drinkDetails, this.border('blue')]}> 
                <View style={[styles.ingredientWrapper, this.border('green')]}>
                    <Ingredients ingredients={this.props.drink ? this.props.drink.ingredients : ''} />
                </View>
                <View style={[styles.recipeWrapper, this.border('yellow')]}>
                    <Recipe recipe={this.props.drink ? this.props.drink.recipe : ''} />
                </View>
            </View>
             <View style={[styles.showNextButton, this.border('grey')]}> 
                <ShowNextButton handleNextDrinkButton = {this.props.handleNextDrinkButton} />
            </View>
          </View>

          )
  },  
  render: function(){
    var  isDataReady = (this.props.location && this.props.drink.drinkName) === '' ? this.dataNotReady() : this.showDrink();
    // console.log('in is drinkis ready', this.props.drink.drinkName, this.props.location);
    return (
      isDataReady
      )
  },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 2
    }
  }
}); 
module.exports = ShowDrink;