'use strict';

var React = require('react-native');
var AlcoholFilterButtons = require('./AlcoholFilterButtons');
var ApplyFilterButton = require('./ApplyFilterButton');
var FilterHeader = require('./FilterHeader');

var {
  StyleSheet,
  Text,
  View,
  Image
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
    // justifyContent: 'center',
    // alignItems: 'center' 
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
  imageContainer: {
    flex: 1,
    // position: 'absolute',
    // bottom: 0
    // paddingTop: 10
    // remove width and height to override fixed static size
    // width: null,
    // height: null,
  },
  bottomImageWrapper: {
  flex: 2, 
  // justifyContent: 'center',
  // alignItems: 'center' 
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
                  filterAlcohol = {this.props.filterAlcohol} 
                  handleApplyFilterButton = {this.props.handleApplyFilterButton}/>
              </View>
              <View style={[styles.bottomImageWrapper, this.border('red')]}> 
                <Image style={[styles.imageContainer, this.border('red')]} source={{uri: 'http://i.imgur.com/Q5u47Kj.jpg'}} />
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
