var React = require('react-native');

var {
StyleSheet,
Text,
View,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1, 
    // paddingTop: 5,
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
   text: {
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily: 'Cochin-Bold',
    fontSize: 16,
    // color: '#6f0909',
   }
});

var Recipe = React.createClass({
render: function(){
  var displayRecipe = this.props.recipe
  return( 
        <View style={[styles.container, this.border('yellow')]}>
            <Text style={styles.text}>
              {displayRecipe}
            </Text>
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



module.exports = Recipe;