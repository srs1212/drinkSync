'use strict';

var React = require('react-native');

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
    flexDirection: 'row',
  },
  footer: { 
    flex: 10
  },
  drinkButton: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  alcoholFilters: { 
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center' 
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
              <View style={[styles.sweetFilter, this.border('red')]}>
                <Text>
                  SWEET FILTER
                </Text>
              </View>
             <View style={[styles.savoryFilter, this.border('yellow')]}>
                <Text>
                  SAVORY FILTER
                </Text>
             </View>
            </View>
            <View style={[styles.footer, this.border('yellow')]}>
              <View style={[styles.alcoholFilters, this.border('blue')]}> 
                <Text>
                  ALCOHOL FILTERS
                </Text>
              </View>
              <View style={[styles.drinkButton, this.border('red')]}> 
                <Text>
                  APPLY(OR TOGGLE) FILTERS BUTTON
                </Text>
              </View>
            </View>
          </View>
          )
  },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
}); 


module.exports = ShowFilter;
