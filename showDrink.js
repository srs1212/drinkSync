'use strict';
var React = require('react-native');
var Weather = require('./Weather');
var DrinkName = require('./DrinkName');
var ShowNextButton = require ('./ShowNextButton');
var ShowPreviousButton = require ('./ShowPreviousButton');
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
    flex: 5,
 
  },
  buttonsWrapper: {
    flex: 1,
    flexDirection: 'row',
  },/////////////

  button: {
    flex: 1
  },
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
   bg: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: windowSize.width,
    height: windowSize.height,
  },
  
});

var ShowDrink = React.createClass({
  dataNotReady: function(){
    return (
        <ActivityIndicatorIOS
          style={[styles.containerdataNotReady , this.border('red')]}
          size="large"
          color="black"/>
      )
  },
        // isDrinkReady = ? this.dataNotReady() :  <DrinkDetails drink = {this.props.drink}/>
    // var sortedDrink = this.props.sortedDrinkList[0];
    // var filteredDrink = this.props.filteredDrinkList[0];
    // console.log('in show drink', sortedDrink, filteredDrink );
  showDrink: function(){
    return (  
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

                <View style={[styles.buttonsWrapper, this.border('red')]}> 
                  <View style={[styles.button, this.border('blue')]}> 
                    <ShowPreviousButton handlePreviousDrinkButton = {this.props.handlePreviousDrinkButton} sortedDrinkList = {this.props.sortedDrinkList} />
                  </View>
                  <View style={[styles.button, this.border('blue')]}> 
                    <ShowNextButton handleNextDrinkButton = {this.props.handleNextDrinkButton} />
                  </View>
                </View>
            </View>
            
        </View> 

          )
  },  
  render: function(){
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