
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
   flexDirection: 'row',
 },
 ingredientWrapper: { 
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

var Ingredients = React.createClass({
 render: function(){
   // var displayIngredients = this.props.drink.ingredients
   // console.log("in drinkName", image);
   return( 
         <View style={[styles.container, this.border('green')]}>
           <View style={[styles.ingredientWrapper, this.border('yellow')]}>
             <Text>
               {ingredients}
             </Text>
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



module.exports = Ingredients;