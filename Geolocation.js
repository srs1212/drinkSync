/* eslint no-console: 0 */
'use strict';

var DataAndLogic = require('./DataAndLogic');
var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS,
} = React;

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
  containerdataNotReady: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
});

var Geolocation = React.createClass({
  watchID: (null: ?number),

  getInitialState: function() {
    return {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
  },
  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = position;
        this.setState({initialPosition});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  },
  componentWillUnmount: function() {
    navigator.geolocation.clearWatch(this.watchID);
  },
  dataNotReady: function(){
    return (
        <ActivityIndicatorIOS
          style={styles.containerdataNotReady}
          size="large"
          color="black"/>
      )
  },
  render: function (){
    // console.log('in geolocation', this.state.initialPosition);
    var  isDataReady = this.state.initialPosition === 'unknown' ? this.dataNotReady() : <DataAndLogic initialPosition={this.state.initialPosition} />
    return (
      isDataReady
      )
  }
});



module.exports = Geolocation;