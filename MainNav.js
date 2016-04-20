'use strict';

var React = require('react-native');
var ShowDrink = require('./ShowDrink');
var ShowFilter = require('./ShowFilter');
var ScrollableTabView = require('react-native-scrollable-tab-view');

var MainNav = React.createClass({
render() {
       // var changePage = this.props.changePage ? 0 : null;
       // console.log('in MainNav', this.props.mainNavPage);
    return (
            <ScrollableTabView
              initialPage={0}
              page={this.props.mainNavPage}>

              <ShowFilter tabLabel='Filter' 
                filterAlcohol = {this.props.filterAlcohol}
                handleFilterAlcoholState = {this.props.handleFilterAlcoholState}
                handleApplyFilterButton = {this.props.handleApplyFilterButton} />

              <ShowDrink tabLabel='Drink'
                location = {this.props.location}
                temp = {this.props.temp}
                precip = {this.props.precip}
                icon = {this.props.icon}
                icon_url = {this.props.icon_url}  
                drink = {this.props.drink} />

            </ScrollableTabView>
            );
        }
});

module.exports = MainNav;
