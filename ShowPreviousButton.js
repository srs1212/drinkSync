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
 buttonWrapper: { 
   flex: 10,
   justifyContent: 'center',
   alignItems: 'center'
 },
  buttonStyleUp: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, .4)',
    borderColor: '#6f0909',
    marginLeft: 3,
    marginRight: 3,
  },

});

var ShowPreviousButton = React.createClass({
 render: function(){
   var displayDrinkName = this.props.drinkName;
   var image = this.props.image;
   // console.log("in drinkName", image);
   return( 
         <View style={[styles.container, this.border('green')]}>
           <View style={[styles.iconWrapper, this.border('red')]}>
                  <Button style={styles.buttonStyleUp}
                    onPress={() => {this.props.handlePreviousDrinkButton()}}>
                     Previous Best Drink
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



module.exports = ShowPreviousButton;