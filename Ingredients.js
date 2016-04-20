
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
   // flexDirection: 'row',
   // justifyContent: 'center',
 },
 ingredientWrapper: { 
   flex: 1,
     justifyContent: 'center',
   // justifyContent: 'center',
   // alignItems: 'center'
 }
});

var Ingredients = React.createClass({
 createListItem: function(){
   var ingredientArray = this.props.ingredients
   // console.log('create list item', this.props.ingredients);
   return ingredientArray.map(function(item){
      return (
              <Text key={item}>
              {item}
              </Text>
            )
   })
 },
 render: function(){
   return( 
         <View style={[styles.container, this.border('yellow')]}>
           <View style={[styles.ingredientWrapper, this.border('blue')]}>
             {this.createListItem()}
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



module.exports = Ingredients;