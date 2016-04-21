'use strict';

var React = require('react-native');
var Button = require('apsl-react-native-button');

var {
 StyleSheet,
 Text,
 View,
 Image,
} = React;

var styles = StyleSheet.create({
 container: {
   flex: 1, 
   flexDirection: 'row',
 },
 iconWrapper: { 
   flex: 4,
   justifyContent: 'center',
   alignItems: 'center' ,
   borderColor: 'black',
   borderWidth: 1
 },
 drinkNameWrapper: { 
   flex: 10,
   justifyContent: 'center',
   alignItems: 'center'
 },
 bg: {
   position: 'absolute',
   left: 0,
   top: 0,
 },
 base: {
   width: 100,
   height: 100,

 },
});

var DrinkName = React.createClass({
 render: function(){
   var displayDrinkName = this.props.drinkName;
   var image = this.props.image;
   // console.log("in drinkName", image);
   return( 
         <View style={[styles.container, this.border('green')]}>
           <View style={[styles.iconWrapper, this.border('red')]}>
             <Image style={[styles.base, {overflow: 'visible'}]} source={{uri: image}}  />
           </View>
           <View style={[styles.drinkNameWrapper, this.border('yellow')]}>
             <Text>
               {displayDrinkName}
             </Text>
                  <Button
                    onPress={() => {this.props.handleNextDrinkButton()}}>
                     #2 Recommended Drink
                  </Button> 
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



module.exports = DrinkName;