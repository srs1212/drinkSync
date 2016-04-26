'use strict';

var React = require('react-native');
var theDate = new Date();
var timeAmPm = theDate.toLocaleTimeString().replace(/([\d]+:[\d]{2}).*([A-Z]{2}$)/, "$1$2");
// var dateToDisplay = "It's "  + timeAmPm + " on " + theDate.toString().substr(0,10);

var temp = 50; 
var icon = 'rainy';
  // temp on line 8, and icon on line 9 is hardcoded for testing purposes only

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
    justifyContent: 'center',
    alignItems: 'center' 
  },
  textWrapper: { 
    flexDirection: 'column',
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
    // paddingLeft: 10,
    // paddingTop: 1
  },
  textNow: {
    flex: 1,
    // flexWrap: 'wrap',
    color: '#6f0909',
    fontFamily: 'Cochin-Bold',
    fontSize: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  weathericon: {
   flex: 1,
   width: 50,
   height: 50,
  },
});

var Weather = React.createClass({
  getDayOfWeek: function() {
    var weekday = theDate.getDay();
    return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][weekday];
  },
  getIconType: function() {

  },
  drinkSyncRecommends: function() {
    var location = this.props.location
    // var temp = this.props.temp
    // var icon = this.props.icon
    // var icon_url = this.props.icon_url
    // console.log(temp);
    if ( icon === 'rainy' || 'snowy' ) {
      return "Step out of the " + this.getDayOfWeek() + " weather in " + location + " and follow DrinkSync's recommendation to order a:";
    } else if ( temp <= 54 ) {
      return "Blah blah blah";
    } else if ( temp >= 55 && temp <= 89) {
      return "DrinkSync has run the numbers enjoy this beautiful " + temp + "º " + this.getDayOfWeek() + " in Missoula by ordering a:";
    } else if ( temp >= 90) {
      return "End of Function";
    }
  },

  render: function(){
    var location = this.props.location
    // var temp = this.props.temp
    // var icon = this.props.icon
    var icon_url = this.props.icon_url
    // console.log('here is the icon', icon, icon_url);


 return( 
          <View style={[styles.container, this.border('green')]}>
            <View style={[styles.iconWrapper, this.border('red')]}>
              <Image style={styles.weathericon} source={{uri: icon_url}} />
              <Text>
              {icon}
              </Text>
            </View>
            <View style={[styles.textWrapper, this.border('black')]}>
              <Text style={styles.textNow}>
               {this.drinkSyncRecommends()}
              </Text>
            </View>
          </View>
          )
  },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 1
    }
  }
}); 



module.exports = Weather;



// The following is the old text return for the weather.js portion of the showdrink page
             //     <Text style={styles.textNow}>
             //   and {temp} deg. in {location} 
             //  </Text>
             // <Text style={styles.textNow}>
             //  Your DrinkSync perfect drink is a:
             //  </Text>




