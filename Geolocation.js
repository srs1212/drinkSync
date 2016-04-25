/* eslint no-console: 0 */
'use strict';

var DataAndLogic = require('./DataAndLogic');
var React = require('react-native');

var {
  StyleSheet,
  ActivityIndicatorIOS,
} = React;

var styles = StyleSheet.create({
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
      (error) => {
        console.log(error.message);
        alert('You have denied location access to Drink Sync, therefore we have set it to Missoula, MT. Please go to Settings> General> Reset to see results for your current location.');
        this.setState({
         initialPosition: {coords: {latitude: 46.861321, longitude: -113.983213}}
        });
      },
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
    var  isDataReady = this.state.initialPosition === 'unknown' ? this.dataNotReady() : <DataAndLogic initialPosition={this.state.initialPosition} />
    return (
      isDataReady
      )
  }
});



module.exports = Geolocation;