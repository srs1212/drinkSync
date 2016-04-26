'use strict';
var React = require('react-native');
var Weather = require('./Weather');
var DrinkName = require('./DrinkName');
var ShowNextButton = require ('./ShowNextButton');
var ShowPreviousButton = require ('./ShowPreviousButton');
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
  bg: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: windowSize.width,
    height: windowSize.height,
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
    paddingBottom: 5
  },
  drinkNameWrapper: { 
    flex: 3.5,
    paddingBottom: 5
  },
  ingredRecipText: {
    color: '#6f0909',
    fontFamily: 'Cochin-BoldItalic',
    fontSize: 20 
  },
  bothButtons: {
    flexDirection: 'row',
    flex: 1
  },

      showPreviousButton: {
        flex: 1,
      },

      showNextButton: {
        flex: 1,
      },


  drinkDetails: { 
    flex: 2.5,
    flexDirection: 'row',
  },
      ingredientWrapper: { 
        flex: 1,
        paddingLeft: 10
      },
      recipeWrapper: { 
        flex: 1,
        paddingRight: 10
      },
   buttonStyleUp: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, .4)',
    borderColor: '#6f0909',
    marginLeft: 3,
    marginRight: 3,
  },

  
});
//container -green
  //headertop -blue
  //weatherWrapper red
  //drinkNameWrapper -pink
  //drinkDetails  -blue
    //ingredients -green
    //recipe -yellow

//finish the weather syntax dd icons and button style to next Best Drink, format whole Drink page and incorporate the filter code

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
   // line 103 <Image source={{uri: 'http://i.imgur.com/23jLqI0.jpg'}} style={[styles.bg, this.border('yellow')]} /> 
    return(   
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
                        <View> 
                           <Text style={[styles.ingredRecipText, this.border('yellow')]}>
                           Ingredients
                           </Text>
                        </View>
                        <View>
                        <Ingredients ingredients={this.props.drink ? this.props.drink.ingredients : ''} />
                        </View>
                    </View>
                    <View style={[styles.recipeWrapper, this.border('purple')]}>
                        <View> 
                           <Text style={[styles.ingredRecipText, this.border('orange')]}>
                           Recipe
                           </Text>
                        </View>
                        <View>
                        <Recipe recipe={this.props.drink ? this.props.drink.recipe : ''} />
                        </View>
                    </View>
                </View>
                   <View style={[styles.bothButtons, this.border('orange')]}>  
                     <View style={[styles.showNextButton, this.border('grey')]}> 
                        <ShowNextButton handleNextDrinkButton = {this.props.handleNextDrinkButton} />
                     </View>
                      <View style={[styles.showNextButton, this.border('grey')]}> 
                        <ShowNextButton handleNextDrinkButton = {this.props.handleNextDrinkButton} />
                     </View>
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
      borderWidth: 1
    }
  }
}); 
module.exports = ShowDrink;