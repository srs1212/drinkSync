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
    justifyContent: 'center',
    alignItems: 'center' 
  },
  textWrapper: { 
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
    // paddingLeft: 10,
    // paddingTop: 15

  },
    textNow: {
      color: '#6f0909',
      fontFamily: 'Cochin-Bold',
      fontSize: 15
    },
  weathericon: {
   width: 50,
   height: 50,
 },
});

var Weather = React.createClass({
  render: function(){
    var location = this.props.location
    var temp = this.props.temp
    var icon = this.props.icon
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
               {dateToDisplay}
              </Text>
               <Text style={styles.textNow}>
                and {temp}&deg; in {location} 
              </Text>
             <Text style={styles.textNow}>
              Your DrinkSync perfect drink is a:
              </Text>
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



module.exports = Weather;
