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
    alignItems: 'center'
  },
  textStyleUp: {
    color: 'white'
  },
  buttonStyleUp: {
    flex: 1,
    borderColor: 'black',
    backgroundColor: '#6f0909',
    width: 150
  },
});


var ApplyFilterButton = React.createClass({
  isDisabled: function(){
    var initialLoad = this.props.initialLoad
    var arrayEmpty = this.props.filterAlcohol.length ? false : true 
    return (initialLoad && arrayEmpty) ? true : false;
  },
  render: function(){
    return( 
          <View style={[styles.container, this.border('red')]}>
            <Button 
              style={styles.buttonStyleUp} 
              textStyle={styles.textStyleUp}
              isDisabled={this.isDisabled()} 
              onPress={() => {this.props.handleApplyFilterButton()}}>
                {this.isDisabled() ? 'Select Filters' : 'Show Drink'}
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
