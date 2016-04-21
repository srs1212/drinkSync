'use strict';

var React = require('react-native');
var Button = require('apsl-react-native-button');


var {
  StyleSheet,
  Text,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50
  },
  textStyleUp: {
    color: 'white'
  },
  buttonStyleUp: {
    flex: 1,
    borderColor: 'black',
    backgroundColor: '#6f0909',
    width: 150, 
    marginLeft: 60,
    marginRight: 50
    // marginLeft: 3,
    // marginRight: 3,
  },
});


    // borderColor: 'rgb(97,126,60)',
    // backgroundColor: '#617e3c',

var ApplyFilterButton = React.createClass({
  isDisabled: function(){
    return this.props.filterAlcohol.length ? false : true
  },
  render: function(){
    return( 
          <View style={[styles.container, this.border('red')]}>
                <Button 
                  style={styles.buttonStyleUp} 
                  textStyle={styles.textStyleUp}
                  // isDisabled={this.isDisabled()} 
                  onPress={() => {this.props.handleApplyFilterButton()}}>
                    {this.props.filterAlcohol.length ? 'Show Drink' : 'Select Filters'}
                </Button>                
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


module.exports = ApplyFilterButton;
