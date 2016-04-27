'use strict';

var React = require('react-native');

var {
 StyleSheet,
 Text,
 View,
} = React;

var styles = StyleSheet.create({
 container: {
  flex: 1,
  // backgroundColor: 'transparent',
  // borderWidth: 1,
  // borderTopLeftRadius: 20,
  // borderTopRightRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
    // backgroundColor: '#6f0909',
    // borderColor: '#6f0909',
    // borderTopLeftRadius: 30 ,
    // borderTopRightRadius: 30,
    //    color: 'white',
    // fontFamily: 'Cochin-BoldItalic',
    // // textDecorationLine: 'underline',
    // fontSize: 40,
 //    shadowColor: 'black', 
 //    shadowOffset: { width: 2, height: 2 }, 
 //    shadowOpacity: .6, shadowRadius: 4, 
 },
 drinkText: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#6f0909',
    fontFamily: 'Cochin-BoldItalic',
    // textDecorationLine: 'underline',
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 36,
    
  },


  // simpleButton: { 
  //   backgroundColor: '#5B29C1',
  //  borderColor: '#48209A', borderWidth: 1, borderRadius: 4, paddingHorizontal: 20, paddingVertical: 15, shadowColor: 'darkgrey', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.8, shadowRadius: 1, }, 
  // simpleButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});

var DrinkName = React.createClass({
 render: function(){
   var displayDrinkName = this.props.drinkName;
   return( 
          <View style={[styles.container, this.border('orange')]}>
              <Text style={styles.drinkText}> 
                {displayDrinkName}
              </Text>
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


module.exports = DrinkName;