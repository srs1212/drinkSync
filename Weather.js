'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var Weather = React.createClass({
  render: function(){
    var location = this.props.location
    var temp = this.props.temp
    return( 
          <View style={[styles.container, this.border('green')]}>
            <View style={[styles.iconWrapper, this.border('red')]}>
              <Text>
               W/ICON
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
});

module.exports = Weather;
