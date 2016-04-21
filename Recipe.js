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
recipe: {
  flex: 1, 
  // justifyContent: 'center',
},
 text: {
  backgroundColor: 'rgba(0,0,0,0)'
 }
});

var Recipe = React.createClass({
render: function(){
  // console.log("in Recipe", this.props.recipe);
  var displayRecipe = this.props.recipe
  return( 
        <View style={[styles.container, this.border('yellow')]}>
        <View style={[styles.recipe, this.border('green')]}>
            <Text style={styles.text}>
              {displayRecipe}
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



module.exports = Recipe;