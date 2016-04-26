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
  backgroundColor: 'transparent',
  borderColor: '#6f0909',
  borderWidth: 1,
  // borderTopLeftRadius: 20,
  // borderTopRightRadius: 20,
  justifyContent: 'center',
  alignItems: 'center'
 },
 drinkText: {
    color: '#6f0909',
    fontFamily: 'Cochin-BoldItalic',
    // textDecorationLine: 'underline',
    fontSize: 40
  },
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