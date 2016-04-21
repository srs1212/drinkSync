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

const styles = React.StyleSheet.create({
  containerLanding: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
  },
  topTextWrapper1: {
    flex: 1,
    backgroundColor: 'transparent',
  },  
  topTextWrapper2: {
    flex: 2.5,
    backgroundColor: 'transparent',
    paddingLeft: 10
  },  
  buttonWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingLeft: 10
    // justifyContent: 'center',
    // alignItems: 'center',
  },  
  bottomTextWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40
  },
  bg: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: windowSize.width,
    height: windowSize.height,
  },
  body1: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black'
  },
  h1: {
    fontSize: 30,
    fontFamily: 'AvenirNext-DemiBold',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black'
  },
  buttonA: {
    width: 140,
    backgroundColor: 'rgba(0,0,0, .2)',
    borderColor: 'rgba(0,0,0, .7)',
  },
  buttonD: {
    width: 140,
    backgroundColor: 'rgba(0,0,0, .2)',
    borderColor: 'rgba(0,0,0, .7)',
  },
});

var Landing = React.createClass({
  handleNotLegalSubmit: function(){
    Alert.alert('Please come back when you are 21.')
  },
  render: function (){
    return (
            <View style={[styles.containerLanding,  testBorder('black')]}>
              <Image style={styles.bg} source={{uri: 'http://i.imgur.com/LFHJJh2.jpg'}} />
              <View style={[styles.topContainer,  testBorder('red')]}>
                <View style={[styles.topTextWrapper1,  testBorder('green')]}>
                </View>
                <View style={[styles.topTextWrapper2,  testBorder('purple')]}>
                  <Text style={styles.body1}>
                    By clicking the Agree button, you 
                  </Text>                 
                  <Text style={styles.body1}>
                    confirm that you are over
                  </Text>
                  <Text style={styles.body1}>
                    the age of 21.
                  </Text>
                </View>
              </View>
              <View style={[styles.bottomContainer,  testBorder('yellow')]}>
                <View style={[styles.buttonWrapper,  testBorder('green')]}>
                  <Button onPress={this.props.handleLegalSubmit} style={styles.buttonA} >
                    Agree
                  </Button>
                  <Button onPress={this.handleNotLegalSubmit} style={styles.buttonD}>
                    Disagree
                  </Button>
                </View>
                <View style={[styles.bottomTextWrapper,  testBorder('purple')]}>
                  <Text style={styles.body1}>
                    Please drink responsibily
                  </Text>
                </View>
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