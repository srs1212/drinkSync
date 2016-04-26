'use strict';
var React = require('react-native');
var Weather = require('./Weather');
var DrinkName = require('./DrinkName');
var ShowNextButton = require ('./ShowNextButton');
var Ingredients = require('./Ingredients');
var Recipe = require('./Recipe');
var DrinkDetails = require('./DrinkDetails');
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

  //flex group 1
  container: {
    flex: 1, 
  },////////////

  //flex group 2 (green)
  headerContainer: {
    flex: 1
  },  
  bodyContainer: {
    flex: 10
  },////////////

  //flex group 3 (red)
  weatherWrapper: { 
    flex: 1,
  },
  drinkNameWrapper: { 
    flex: 6,
  },
  showNextButton: {
    flex: 1,
  },/////////////

  headerWrapper: {
    flex: 1
  },
  containerdataNotReady: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  bg: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: windowSize.width,
    height: windowSize.height,
  },
  ingredRecipText: {
    color: '#6f0909',
    fontFamily: 'Cochin-BoldItalic',
    fontSize: 20 
  },

  drinkDetails: { 
    flex: 2.5,
    flexDirection: 'row',
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
  //headerWrapper -blue
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
    return(   
          <View style={styles.container}>

            <View style={[styles.headerContainer, this.border('green')]}>
              <View style={styles.headerWrapper}>
                 <HeaderLogo /> 
              </View>
            </View> 

            <View style={[styles.bodyContainer, this.border('green')]}>

                <View style={[styles.weatherWrapper, this.border('red')]}> 
                  <Weather location={this.props.location} temp={this.props.temp} icon={this.props.icon} icon_url={this.props.icon_url} />
                </View>
                <View style={[styles.drinkNameWrapper, this.border('red')]}> 
                  <DrinkDetails drink = {this.props.drink}/>
                </View>
                <View style={[styles.showNextButton, this.border('red')]}> 
                  <ShowNextButton handleNextDrinkButton = {this.props.handleNextDrinkButton} />
                </View>

            </View>

          </View>

          )
  },  
  render: function(){
     // console.log('in show drink', this.props.drink);
    var  isDataReady = (this.props.location && this.props.drink.drinkName) === '' ? this.dataNotReady() : this.showDrink();
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