var React = require('react-native');
var Ingredients = require('./Ingredients');
var DrinkImage = require('./DrinkImage');

var {
StyleSheet,
Text,
View,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    backgroundColor: 'black'
    // paddingLeft: 5,
    // paddingRight: 5
  },  
  ImageWrapper: {
    flex: 1, 
    // paddingLeft: 5,
    // paddingRight: 5
  },  
  IngredientWrapper: {
    flex: 1.3,
      // justifyContent: 'center',
       // alignItems: 'center' 
    // paddingLeft: 5,
    // paddingRight: 5
  },
   text: {
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily: 'Cochin-Bold',
    fontSize: 15,
    // color: '#6f0909',
   }
});

var ImageAndIngredients = React.createClass({
render: function(){
  var ingredients = this.props.ingredients;
  var image = this.props.image;
   // console.log("in image and ingredients", ingredients);
  return( 
        <View style={[styles.container, this.border('yellow')]}>

          <View style={[styles.ImageWrapper, this.border('red')]}>
            <DrinkImage image={image}/>
          </View>

          <View style={[styles.IngredientWrapper, this.border('green')]}>
            <Ingredients ingredients={ingredients}/>
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



module.exports = ImageAndIngredients;