
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
   justifyContent: 'center',
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
          // console.log('in ingredients', this.props.ingredients);
   var displayIngredients = this.props.ingredients
   return( 
         <View style={[styles.container, this.border('yellow')]}>
           <View style={[styles.ingredientWrapper, this.border('blue')]}>
             <Text>
               {displayIngredients}
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