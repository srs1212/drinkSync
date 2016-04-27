
'use strict';

var React = require('react-native');

var {
 StyleSheet,
 Text,
 View,
} = React;

var styles = StyleSheet.create({
  topContainer: {
   flex: 1, 
   justifyContent: 'center',
   // alignItems: 'center'
 },
 container: {
   flex: 1, 
   // justifyContent: 'space-around',
   // alignItems: 'center'
 },
 headerContainer: { 
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 },
  ingredientContainer: { 
  flex: 4.3,
  // paddingTop: 10,
   // justifyContent: 'flex-start',
   // justifyContent: 'space-around',
   // justifyContent: 'space-between',
   paddingLeft: 3,
 },
 headerText: {
  // backgroundColor: 'rgba(0,0,0,0)'
  color: 'white',
  fontFamily: 'Cochin-BoldItalic',
  fontSize: 23,
  // paddingTop: 5,
 },
 IngredientText: {
  // backgroundColor: 'rgba(0,0,0,0)'
  color: 'white',
  paddingBottom: 4,
 }
});

var Ingredients = React.createClass({
 createListItem: function(){
   // console.log('create list item', ingredientArray);
   var ingredientArray = this.props.ingredients
   return ingredientArray.map(function(item){
      return (
              <Text key={item} style={styles.IngredientText}>
                • {item}
              </Text>
            )
   })
 },
 render: function(){
   return( 
        <View style={[styles.topContainer, this.border('blue')]}>
         <View style={[styles.container, this.border('yellow')]}>
           <View style={[styles.headerContainer, this.border('red')]}>
             <Text style={styles.headerText}>
             Ingredients
             </Text>
           </View>
           <View style={[styles.ingredientContainer, this.border('green')]}>
             {this.createListItem()}
           </View>
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