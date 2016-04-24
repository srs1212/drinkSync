var React = require('react-native');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

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
  headerTop: { 
    flex: 1
  },
    imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
    image: {
      flex: 1,
      width: windowSize.width,
    },


});
//Cochin-BoldItalic
//Cochin-Italic 
var HeaderLogo = React.createClass({
render: function(){
  return( 
        <View style={[styles.container, this.border('yellow')]}>
          <View style={[styles.headerTop, this.border('blue')]}>
             <View style={[styles.imageContainer, this.border('yellow')]}>
             <Image style={styles.image} source={{uri: 'http://i.imgur.com/k58TZ8S.jpg'}} />
             </View>
          </View>
        </View>
        )
},
border: function(color){
  return {
    borderColor: color,
    borderWidth: 1
  }
}
});



module.exports = HeaderLogo;