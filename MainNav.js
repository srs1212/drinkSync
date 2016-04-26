'use strict';

var React = require('react-native');
var ShowDrink = require('./ShowDrink');
var ShowFilter = require('./ShowFilter');
var ScrollableTabView = require('react-native-scrollable-tab-view');

var {
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS,
  Image
} = React;

var styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  }
});

var MainNav = React.createClass({
render: function() {
    return (
            <ScrollableTabView
              style={this.border('green')}
              initialPage={0}
              tabBarTextStyle={{fontSize: 14}}
              tabBarUnderlineColor={'#6f0909'}
              tabBarActiveTextColor={'#6f0909'}
              page={this.props.mainNavPage}>

              <ShowFilter tabLabel='Filter' 
                filterAlcohol = {this.props.filterAlcohol}
                handleFilterAlcoholState = {this.props.handleFilterAlcoholState}
                initialLoad = {this.props.initialLoad}
                handleApplyFilterButton = {this.props.handleApplyFilterButton} />

              <ShowDrink tabLabel='Drink'
                location = {this.props.location}
                temp = {this.props.temp}
                precip = {this.props.precip}
                icon = {this.props.icon}
                icon_url = {this.props.icon_url} 
                drink = {this.props.drink}
                handleNextDrinkButton = {this.props.handleNextDrinkButton} />

            </ScrollableTabView>
            );
        },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 0
    }
  }
});

module.exports = MainNav;
