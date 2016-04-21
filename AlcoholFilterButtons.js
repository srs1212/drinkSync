'use strict';

var React = require('react-native');
var Button = require('apsl-react-native-button');
var Icon = require('react-native-vector-icons/Ionicons');



var {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback, 
  Platform 
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'stretch',
    flexDirection: 'row',
    //     justifyContent: 'center',
    // alignItems: 'center',
  },
  leftButtons: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  rightButtons: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // flexWrap: 'wrap' 
  },
  textStyleUp: {
    color: 'black',
    fontFamily: 'Cochin-Bold',
  },
  textStyleDown: {
    color: '#6f0909',
    fontFamily: 'Cochin',
    fontWeight: 'bold'
  },
  buttonStyleUp: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, .4)',
    borderColor: '#6f0909',
    marginLeft: 3,
    marginRight: 3,
  },
  buttonStyleDown: {
    flex: 1,
    borderColor: '#6f0909',
    backgroundColor: 'white',
    marginLeft: 9,
    marginRight: 9,
  },
  // buttonStyleUp: {
  //   flex: 1,
  //   borderColor: '#8e44ad',
  //   backgroundColor: '#9b59b6',
  //   marginLeft: 3,
  //   marginRight: 3,

  // },
  // buttonStyleDown: {
  //   flex: 1,
  //   borderColor: '#8e44ad',
  //   backgroundColor: 'white',
  //   marginLeft: 9,
  //   marginRight: 9,
  // }
});

var allAlcoholButtons = ["Gin", "Tequila", "Vodka", "Brandy", "Whiskey", "Rum", "Liqueur", "Champagne", "Beer","Wine"];

var AlcoholFilterButtons = React.createClass({
  chooseButtonStyle: function(item){
      if (this.props.filterAlcohol.indexOf(item) === -1){
        return styles.buttonStyleUp
      } else {
        return styles.buttonStyleDown
      }
  },
  chooseButtonText: function(item){
      if (this.props.filterAlcohol.indexOf(item) === -1){
        return styles.textStyleUp
      } else {
        return styles.textStyleDown
      }
  },
  setButtonState: function(item){
      var stateArray = this.props.filterAlcohol;
      var index = stateArray.indexOf(item)
      if(stateArray.indexOf(item) == -1){
        stateArray.push(item);
      } else {
        stateArray.splice(index, 1);
      }
        this.props.handleFilterAlcoholState(stateArray);
  },
  activateNo: function(item){
      if (this.props.filterAlcohol.indexOf(item) === -1){
        return null;
      } else {
        return "No "; 
      }
  },
  eachButtonLeft: function(){
    var self = this;
    return allAlcoholButtons.map(function(item, i){
      if (i < 5){
         return (
                  <Button
                    key={item}
                    style={self.chooseButtonStyle(item)}
                    textStyle={self.chooseButtonText(item)}
                    onPress={() => {self.setButtonState(item)}}>
                      {self.activateNo(item)}
                      {item}
                  </Button> 
                )
       } else{
        return null;
       }
    })
  },  
  eachButtonRight: function(){
    var self = this;
    return allAlcoholButtons.map(function(item, i){
       if (i > 4 ){
         return (
                  <Button
                    key={item}
                    style={self.chooseButtonStyle(item)}
                    textStyle={self.chooseButtonText(item)}
                    onPress={() => {self.setButtonState(item)}}>
                      {self.activateNo(item)}
                      {item}
                  </Button> 
                )
       } else{
        return null;
       }
    })
  },
  render: function(){
        // console.log(this.props.filterAlcohol, this.props.handleFilterAlcoholState);
        return (
            <View style={[styles.container, this.border('red')]}>
               <View style={[styles.leftButtons, this.border('green')]}>
                  {this.eachButtonLeft()}
                </View>
                <View style={[styles.rightButtons, this.border('blue')]}>
                  {this.eachButtonRight()}
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


module.exports = AlcoholFilterButtons;
