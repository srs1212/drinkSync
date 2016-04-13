'use strict';
var React = require('react-native');
var Button = require('apsl-react-native-button');

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
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  },
  header: {
  	color: 'blue',
  	fontSize: 30,
  	margin: 80,
  	flex: 1,
  	justifyContent: 'flex-start',
    alignItems: 'center',
  },
  card: {
   borderWidth: 3,
   borderRadius: 3,
   borderColor: '#000',
   width: 300,
   height: 300,
   padding: 10,
   flex: 1,
   justifyContent: 'flex-start',
   alignItems: 'center',
 },
});


var Landing = React.createClass({
	render: function (){
	console.log("hello world");
		return (
			<View>
				<Text style={styles.header}>
					Welcome to DrinkSync
				</Text>	
				<Text >
					By tapping the Agree button, you confirm that you are over the age of 21.
				</Text>
				<Button onPress={this.props.handleLegalSubmit} style={{backgroundColor: 'green'}} textStyle={{fontSize: 18}}>
				 	Agree
				</Button>
				<Button onPress={this.props.handleNotLegalSubmit} style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}}>
				 	Disagree
				</Button>
     			<Text>
     				Please drink responsibily
     			</Text>
			</View>
			);
	}
});




module.exports = Landing;
