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
    // paddingLeft: 8,
    // paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: '#6f0909',
    borderBottomLeftRadius: 30 ,
    borderBottomRightRadius: 30,
    //    color: 'white',
    // fontFamily: 'Cochin-BoldItalic',
    // // textDecorationLine: 'underline',
    // fontSize: 40,
    shadowColor: 'black', 
    shadowOffset: { width: 2, height: 2 }, 
    shadowOpacity: .6, shadowRadius: 4, 
  },
   text: {
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily: 'Cochin-Bold',
    fontSize: 16,
    paddingLeft: 8,
    paddingRight: 8,
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