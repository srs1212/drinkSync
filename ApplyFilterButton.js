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
    alignItems: 'stretch'
  },
  textStyleUp: {
    color: 'white'
  },
  buttonStyleUp: {
    flex: 1,
    borderColor: '#2980b9',
    backgroundColor: '#3498db',
    marginLeft: 3,
    marginRight: 3,
  },
});


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
                  isDisabled={this.isDisabled()} 
                  onPress={() => {this.props.handleApplyFilterButton()}}>
                    {this.props.filterAlcohol.length ? 'Apply Filters' : 'Select Filters'}
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
