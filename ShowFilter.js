'use strict';

var React = require('react-native');
var AlcoholFilterButtons = require('./AlcoholFilterButtons');
var ApplyFilterButton = require('./ApplyFilterButton');
var FilterHeader = require('./FilterHeader');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var {
  StyleSheet,
  Text,
  Image,
  View,
} = React;

var styles = StyleSheet.create({

  bgTop: {
  flex: 1,
  },

   bgBot: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: windowSize.width,
    height: windowSize.height,
  },
    containerFilter: {
    flex: 10, 
    alignItems: 'stretch'
  },
   headerSpace: {
    flex: 1, 
  },
    headerFilter: { 
    flex: 1,
    // flexDirection: 'row',
  },
  buttonBody: { 
    flex: 7
  },
    alcoholFilterButtons: {
      flex: .5,
  },
    applyFilterButton: { 
      flex: .5,
      justifyContent: 'center',
  },
  footerSpace: {
    flex: 1 
  },

});

//containerFilter -- pink
    //headerSpace -- orange
    //headerFilter -- orange
    //buttonBody -- yellow
      //alcohol filters --blue
      //apply filters button  --red 
    //footerSpace -- black 

var ShowFilter = React.createClass({   
  render: function(){
    return( 
          <View style={[styles.containerFilter,  this.border('pink')]}>
            <View style={[styles.headerSpace, this.border('orange')]}> 
            <Image style={styles.bgTop} source={{uri:'http://i.imgur.com/k58TZ8S.jpg'}} />
            </View>
            <View style={[styles.headerFilter, this.border('orange')]}> 
               <FilterHeader /> 
            </View>
            <View style={[styles.buttonBody, this.border('yellow')]}>
              <View style={[styles.alcoholFilters, this.border('blue')]}> 
                <AlcoholFilterButtons 
                  filterAlcohol = {this.props.filterAlcohol}
                  handleFilterAlcoholState = {this.props.handleFilterAlcoholState} />
              </View>
              <View style={[styles.applyFilterButton, this.border('red')]}> 
                <ApplyFilterButton
                  filterAlcohol = {this.props.filterAlcohol} 
                  handleApplyFilterButton = {this.props.handleApplyFilterButton}/>
              </View>
            </View>
            <View style={[styles.footerSpace, this.border('black')]}> 
            </View>
          </View>
          )
  },

  border: function(color){
    return {
      borderColor: color,
      borderWidth: 3
    }
  }
}); 


module.exports = ShowFilter;
