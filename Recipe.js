var React = require('react-native');

var {
StyleSheet,
Text,
View,
} = React;

var styles = StyleSheet.create({
container: {
  flex: 1, 
  flexDirection: 'row',
},
RecipeWrapper: { 
  flex: 10,

},
bg: {
  position: 'absolute',
  left: 0,
  top: 0,
},
base: {
  width: 100,
  height: 100,
},
});

var Recipe = React.createClass({
render: function(){
  console.log("in Recipe", this.props.recipe);
  var displayRecipe = this.props.recipe
  return( 
        <View style={[styles.container, this.border('yellow')]}>
          <View style={[styles.recipeWrapper, this.border('purple')]}>
            <Text>
              {displayRecipe}
            </Text>
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



module.exports = Recipe;