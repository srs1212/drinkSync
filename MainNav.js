'use strict';

var React = require('react-native');
var ShowDrink = require('./ShowDrink');
var ShowFilter = require('./ShowFilter');
var ScrollableTabView = require('react-native-scrollable-tab-view');

var MainNav = React.createClass({
render() {
    return (
            <ScrollableTabView>
              <ShowDrink tabLabel='Drink'
              location = {this.props.location}
              temp = {this.props.temp}
              precip = {this.props.precip}
              icon = {this.props.icon}
              icon_url = {this.props.icon_url}
              drinkName = {this.props.drinkName}
              image = {this.props.image}
              />
              <ShowFilter tabLabel='Filter'/>
            </ScrollableTabView>
            );
        }
});

module.exports = MainNav;
