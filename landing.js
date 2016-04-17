'use strict';

var React = require('react-native');
var Button = require('apsl-react-native-button');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var {
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} = React;

// customize the material design theme
const styles = React.StyleSheet.create({
  containerLanding: {
    flex: 1,
    justifyContent: 'center',
    margin: 0 
  },
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: windowSize.width,
    height: windowSize.height,
  },
  halfHeight: {
    flex: .5,
    backgroundColor: 'grey'
  },
  quarterHeight: {
    flex: .25,
    backgroundColor: 'transparent'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  body1: {
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white'
  },
  h1: {
    fontSize: 30,
    fontFamily: 'AvenirNext-DemiBold',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white'
  },
  buttonWrapper: {
    flexDirection: 'column',
    padding: 10 
  },
  bodyBox: {
    width: 140,
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  buttonA: {
    width: 140,
    backgroundColor: 'rgba(255, 255, 255, .4)',
    borderColor: 'rgba(255, 255, 255, .7)',
  },
  buttonD: {
    width: 140,
    backgroundColor: 'rgba(255, 255, 255, .4)',
    borderColor: 'rgba(255, 255, 255, .7)',
  },
  whiteText: {
    color: 'white'
  }
});

var Landing = React.createClass({
  handleNotLegalSubmit: function(){
    Alert.alert('Please come back when you are 21.')
  },
  render: function (){
    return (
            <View style={[styles.containerLanding,  testBorder('white')]}>
              <Image style={styles.bg} source={{uri: 'http://imgur.com/4cTJ7wR.jpg'}} />
              <View style ={[styles.quarterHeight, testBorder('yellow'), styles.header]}>
                <Text style={styles.h1}>
                  Welcome to DrinkSync
                </Text>   
              </View>
              <View style ={[styles.quarterHeight, testBorder('pink'), styles.bodyBox]}>
                <Text style={styles.body1}>
                  By clicking the Agree button, you confirm that you are over the age of 21.
                </Text>
              </View>
              <View style ={[styles.quarterHeight,  testBorder('green'), styles.buttonWrapper]}>
                <Button onPress={this.props.handleLegalSubmit} style={styles.buttonA} >
                  Agree
                </Button>
                <Button onPress={this.handleNotLegalSubmit} style={styles.buttonD}>
                  Disagree
                </Button>
              </View>
              <View style ={[styles.quarterHeight,  testBorder('red'), styles.bodyBox]}>
                <Text style={styles.body1}>
                  Please drink responsibily
                </Text>
              </View>
            </View>
            );
    }
});

var testBorder = function(color){
  return {
    borderColor: color,
    borderWidth: 0
  }
}

module.exports = Landing;