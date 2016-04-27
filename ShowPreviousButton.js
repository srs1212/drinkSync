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
 buttonText: { 
    fontFamily: 'Cochin-Bold',
    fontSize: 18,
    color: 'white'
 },
  buttonStyleUp: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, .4)',
    borderColor: '#6f0909',
    marginTop: 13,
    marginLeft: 15,
    marginRight: 8,
  },

});

var ShowPreviousButton = React.createClass({
 render: function(){
   return( 
         <View style={[styles.container, this.border('green')]}>
           <View style={[styles.iconWrapper, this.border('red')]}>
                  <Button 
                    style={styles.buttonStyleUp}
                    textStyle={styles.buttonText}
                    onPress={() => {this.props.handlePreviousDrinkButton()}}>
                     Previous Drink
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