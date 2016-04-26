'use strict';

var React = require('react-native');
var theDate = new Date();
var timeAmPm = theDate.toLocaleTimeString().replace(/([\d]+:[\d]{2}).*([A-Z]{2}$)/, "$1$2");
var dateToDisplay = "It's "  + timeAmPm + " on " + theDate.toString().substr(0,10);

var {
  StyleSheet,
  Image,
  Text,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
  },
  iconWrapper: { 
    flex: 4,
    // justifyContent: 'flex-start',
    alignItems: 'center' ,
    // paddingBottom: 15
  },
  textWrapper: { 
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
    // paddingLeft: 10,
    // paddingTop: 15

  },
    textNow: {
      // color: '#6f0909',
      color: 'black',
      fontFamily: 'Cochin-Bold',
      fontSize: 15,
    },
  weathericon: {
   width: 50,
   height: 50,

 },
 weathericonText: {
    paddingBottom: 5,

 },
});

var Weather = React.createClass({
 getDayOfWeek: function() {
   var weekday = theDate.getDay();
   return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][weekday];
 },

 drinkSyncRecommends: function() {
   var location = this.props.location
   var temp = this.props.temp
   var icon = this.props.icon
   var icon_url = this.props.icon_url
   if ( temp >= 55 && temp <= 89 || icon === 'sunny' ) {
     return (
            <View style={[styles.textWrapper, this.border('blue')]}>
               <Text>DrinkSync has run the numbers</Text> 
               <Text>this beautiful {temp}º {this.getDayOfWeek()}</Text>
               <Text>in {location} calls for a...</Text>
             </View>
             );
   } else {
     return (
            <View style={[styles.textWrapper, this.border('blue')]}>
               <Text style={styles.textNow}>Enjoy your {temp}º {this.getDayOfWeek()}</Text> 
               <Text style={styles.textNow}>in {location}. DrinkSync</Text>
               <Text style={styles.textNow}>recommends ordering a...</Text>
            </View>
            );

   }
 },

 render: function(){
   var location = this.props.location
   var temp = this.props.temp
   var icon = this.props.icon
   var icon_url = this.props.icon_url
return( 
         <View style={[styles.container, this.border('green')]}>
           <View style={[styles.iconWrapper, this.border('red')]}>
             <Image style={styles.weathericon} source={{uri: icon_url}} />
             <Text>
             {icon}
             </Text>
           </View>
              {this.drinkSyncRecommends()}
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
module.exports = Weather;