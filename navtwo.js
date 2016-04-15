'use strict';
var React = require('react-native');
var Button = require('apsl-react-native-button');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
var Icon = require('react-native-vector-icons/FontAwesome');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicatorIOS,
  Image,
  Component,
} = React;


// customize the material design theme




const styles = React.StyleSheet.create({
navBar: {
    borderTopWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 8
 },
  navButton: {
    flex: 1,
    margin: 16
  },

});



class Navtwo extends Component {
  render() {
    return (
    <View style={styles.navBar}>
     <NavBar>
        <View style={styles.navButton}>
          <NavButton style={styles.navButton} onPress={() => alert('hi')}>
            <NavButtonText>
               <Icon name="filter" size={24} color="#900" /> {"Filter"}
            </NavButtonText>
          </NavButton>
        </View>
        <View style={styles.navButton}>
        <NavTitle>
          {"DrinkSync"}
        </NavTitle>
        </View>
        <View style={styles.navButton}>
        <NavButton onPress={() => alert('hi')}>
          <NavButtonText>
            <Icon name="glass" size={24} color="#900" />  {"Drink"}
          </NavButtonText>
        </NavButton>
        </View>
      </NavBar>
    </View>
      );
  }
};


var testBorder = function(color){
  return {
    borderColor: color,
    borderWidth: 2
  }
}


module.exports = Navtwo;

