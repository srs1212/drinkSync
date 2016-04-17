'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Image,
  Text,
  View,
} = React;

var Weather = React.createClass({
  render: function(){
    var location = this.props.location
    var temp = this.props.temp
    var icon = this.props.icon
    var icon_url = this.props.icon_url
    return( 
          <View style={[styles.container, this.border('green')]}>
            <View style={[styles.iconWrapper, this.border('red')]}>
              <Text>
              <Image style={[styles.weathericon, {overflow: 'visible'}]} source={{uri: icon_url}} />
              </Text>
              <Text>{icon}
              </Text>
            </View>
            <View style={[styles.weatherWrapper, this.border('yellow')]}>
              <Text>
               It is {temp} in {location} right now
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
  weatherWrapper: { 
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  weathericon: {
   width: 50,
   height: 50,
 },
});

module.exports = Weather;
