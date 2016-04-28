'use strict';

var React = require('react-native');
var theDate = new Date();
var timeAmPm = theDate.toLocaleTimeString().replace(/([\d]+:[\d]{2}).*([A-Z]{2}$)/, "$1$2");
// var dateToDisplay = "It's "  + timeAmPm + " on " + theDate.toString().substr(0,10);


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
    paddingTop: 5
  },
  textWrapper: { 
    // flexDirection: 'column',
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
    // paddingLeft: 10,
    // paddingTop: 1
  },
  textNow: {
    // flex: 1,
    // flexWrap: 'wrap',
    color: '#6f0909',
    fontFamily: 'Cochin-Bold',
    fontSize: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  weathericon: {
   // flex: 1,
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
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][weekday];
  },
 drinkSyncRecommends: function() {
   var location = this.props.location
   var temp = this.props.temp
   var tempClean = this.props.temp.toFixed([0]);
   var icon = this.props.icon
   var icon_url = this.props.icon_url
   if ( temp >= 64 && temp <= 89 && icon === 'sunny' ) {
     return (
            <View style={[styles.textWrapper, this.border('blue')]}>
               <Text>DrinkSync has run the numbers</Text> 
               <Text>this beautiful {tempClean}º {this.getDayOfWeek()}</Text>
               <Text>in {location} calls for a...</Text>
             </View>
             );
   } else {
     return (
            <View style={[styles.textWrapper, this.border('blue')]}>
               <Text>Enjoy {location}'s {tempClean}º {this.getDayOfWeek()}.</Text> 
               <Text>Given the day, time & temp </Text>
               <Text>DrinkSync recommends a...</Text>
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

