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
 },
 drinkName:{
   flex: 1,
   justifyContent: 'center',
   paddingLeft: 20,
   backgroundColor: 'transparent'
 },
 subContainer: {
   flex: 4, 
   flexDirection: 'row',
 },
     iconWrapper: { 
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center' ,
       borderRadius: 15,
       backgroundColor: 'black',

     },
     spaceWrapper: { 
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
     },
 drinkText: {
    color: '#6f0909',
    fontFamily: 'Cochin-BoldItalic',
    fontSize: 25
  },

 bg: {
   position: 'absolute',
   left: 0,
   top: 0,
 },
 base: {
   flex: 1,
   width: 100,
   height: 100,
   // overflow: 'hidden',
   borderRadius: 5,


 },
});

var DrinkName = React.createClass({
 render: function(){
   var displayDrinkName = this.props.drinkName;
   var image = this.props.image;
   // console.log("in drinkName", image);
   return( 
          <View style={[styles.container, this.border('orange')]}>
             <View style={[styles.drinkName, this.border('blue')]}>
              <Text style={styles.drinkText}> {displayDrinkName}
              </Text>
             </View>
             <View style={[styles.subContainer, this.border('green')]}>
               <View style={[styles.iconWrapper, this.border('red')]}>
                 <Image style={styles.base} source={{uri: image}}  />
               </View>
               <View style={[styles.spaceWrapper, this.border('yellow')]}> 
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



module.exports = DrinkName;