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

  //flex group 1
  container: {
    flex: 1, 
  },////////////

  //flex group 2 (green)
  headerContainer: {
    flex: 1
  },  
  bodyContainer: {
    flex: 10
  },////////////

  //flex group 3 (red)
  messageWrapper: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10 
  },
  buttonsWrapper: { 
    flex: 8
  },////////////

  //flex group 4 (blue)
  alcoholFilters: { 
    flex: 4,
  },
  applyFilterButton: { 
    flex: .9,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  bottomImageWrapper: {
    flex: 1.5, 
  },////////////

  headerWrapper: {
    flex: 1
  },
  imageContainer: {
      flex: 1,
  },
  textStyle: {
    fontFamily: 'Cochin-BoldItalic',
    fontSize: 30
  },
});

var ShowFilter = React.createClass({
  render: function(){
    return( 
      <View style={styles.container}>

          <View style={[styles.headerContainer, this.border('green')]}>
            <View style={styles.headerWrapper}>
               <HeaderLogo /> 
            </View>
          </View> 

          <View style={[styles.bodyContainer, this.border('green')]}>
            
            <View style={[styles.messageWrapper, this.border('red')]}>
              <Text style={styles.textStyle}>
                Omit your poison below...
              </Text>
             </View>

            <View style={[styles.buttonsWrapper, this.border('red')]}>
               
                  <View style={[styles.alcoholFilters, this.border('blue')]}> 
                    <AlcoholFilterButtons 
                      filterAlcohol = {this.props.filterAlcohol}
                      handleFilterAlcoholState = {this.props.handleFilterAlcoholState} />
                  </View>
                  <View style={[styles.applyFilterButton, this.border('blue')]}> 
                    <ApplyFilterButton
                    initialLoad = {this.props.initialLoad}
                    filterAlcohol = {this.props.filterAlcohol} 
                    handleApplyFilterButton = {this.props.handleApplyFilterButton}/>
                  </View>
                  <View style={[styles.bottomImageWrapper, this.border('blue')]}> 
                    <Image style={styles.imageContainer} source={{uri: 'http://i.imgur.com/Q5u47Kj.jpg'}} />
                  </View>
                
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
