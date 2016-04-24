'use strict';

var React = require('react-native');
var AlcoholFilterButtons = require('./AlcoholFilterButtons');
var ApplyFilterButton = require('./ApplyFilterButton');
var HeaderLogo = require('./HeaderLogo');

var {
  StyleSheet,
  Text,
  View,
  Image
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  headerFilter: { 
    flex: 3,
  },
      headerTop: {
      flex: 1,
  },
      imageContainer: {
      flex: 1,
  },

      headerBottom: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center' 
    },
  
      textStyle: {
      fontFamily: 'Cochin-BoldItalic',
      fontSize: 30
    },
  footer: { 
    flex: 10
  },
  applyFilterButton: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  alcoholFilters: { 
    flex: 4,
  },

  bottomImageWrapper: {
    flex: 2, 
  },

});


var ShowFilter = React.createClass({
  render: function(){
    return( 
        <View style={styles.container}>
            <View style={[styles.headerFilter, this.border('yellow')]}> 
                <View style={[styles.headerTop, this.border('green')]}> 
               <HeaderLogo /> 
                </View>
                <View style={[styles.headerBottom, this.border('blue')]}>
                  <Text style={styles.textStyle}>
                    Omit your poison below...
                  </Text>
                </View>
            </View>
            
            <View style={[styles.footer, this.border('yellow')]}>
              <View style={[styles.alcoholFilters, this.border('blue')]}> 
                <AlcoholFilterButtons 
                  filterAlcohol = {this.props.filterAlcohol}
                  handleFilterAlcoholState = {this.props.handleFilterAlcoholState} />
              </View>
              <View style={[styles.applyFilterButton, this.border('red')]}> 
                <ApplyFilterButton
                  initialLoad = {this.props.initialLoad}
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
      borderWidth: 2
    }
  }
}); 


module.exports = ShowFilter;
