'use strict';

var React = require('react-native');
var AlcoholFilterButtons = require('./AlcoholFilterButtons');
var ApplyFilterButton = require('./ApplyFilterButton');
var FilterHeader = require('./FilterHeader');

var {
  StyleSheet,
  Text,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'stretch'
  },
  ssFilters: { 
    flex: 3,
    // flexDirection: 'row',
  },
  footer: { 
    flex: 10
  },
  applyFilterButton: { 
    flex: 1,
    justifyContent: 'center',
  },
  alcoholFilters: { 
    flex: 4,
  },
  sweetFilter: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  savoryFilter: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});


var ShowFilter = React.createClass({
  render: function(){
    return( 
          <View style={styles.container}>
            <View style={[styles.ssFilters, this.border('green')]}> 
               <FilterHeader /> 
            </View>
            <View style={[styles.footer, this.border('yellow')]}>
              <View style={[styles.alcoholFilters, this.border('blue')]}> 
                <AlcoholFilterButtons 
                  filterAlcohol = {this.props.filterAlcohol}
                  handleFilterAlcoholState = {this.props.handleFilterAlcoholState} />
              </View>
              <View style={[styles.applyFilterButton, this.border('red')]}> 
                <ApplyFilterButton 
                  handleApplyFilterButton = {this.props.handleApplyFilterButton}/>
              </View>
            </View>
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


module.exports = ShowFilter;
