'use strict';
var React = require('react-native');
var Button = require('apsl-react-native-button');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component,
} = React;


// customize the material design theme




const styles = React.StyleSheet.create({
  containerLanding: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },

  body1: {
    justifyContent: 'center',
  },

  h1: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },

  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 10
  },



});


var Landing = React.createClass({
	render: function (){
	console.log("hello world");
		return (
			<View style={[styles.containerLanding, testBorder('yellow')]}>
    		<Image style={styles.bg} source={{uri: 'http://i.imgur.com/xlQ56UK.jpg'}} />
            <View style ={[styles.quarterHeight, styles.header, testBorder('orange')]}>
                <Text style={styles.h1}>
        					Welcome to DrinkSync
        				</Text>	
            </View>
            <View style ={[styles.quarterHeight, styles.body1, testBorder('red')]}>
        				<Text >
        					By tapping the Agree button, you confirm that you are over the age of 21.
        				</Text>
            </View>
           <View style ={[styles.quarterHeight, styles.buttonWrapper, testBorder('green')]}>
        				<Button onPress={this.props.handleLegalSubmit} style={{backgroundColor: 'green'}} textStyle={{fontSize: 18}}>
        				 	Agree

        				</Button>
        				<Button onPress={this.props.handleNotLegalSubmit} style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}}>
        				 	Disagree
        				</Button>
            </View>
            <View style ={[styles.quarterHeight, testBorder('white')]}>
             			<Text>
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
    borderWidth: 2
  }
}


module.exports = Landing;
