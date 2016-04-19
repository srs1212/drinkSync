var React = require('react-native');

var {
StyleSheet,
Text,
View,
} = React;

var styles = StyleSheet.create({
container: {
  flex: 1, 
},
header: {
  flex: 1, 
  justifyContent: 'center',
  alignItems: 'center' 
}
});

var FilterHeader = React.createClass({
render: function(){
  return( 
        <View style={[styles.container, this.border('yellow')]}>
        <View style={[styles.header, this.border('green')]}>
            <Text>
               Distill your spirits
            </Text>
            <Text>
               Shrink your drink
            </Text>
            <Text>
               Omit your poison below
            </Text>
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



module.exports = FilterHeader;