var React = require('react-native');

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
  flex: 1, 
  // justifyContent: 'center',
  // alignItems: 'center' 
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
imageContainer: {
   flex: 1,
   // width: 100,
   // height: 100,
    // paddingTop: 10
    // remove width and height to override fixed static size
    // width: null,
    // height: null,
  }
});
//Cochin-BoldItalic
//Cochin-Italic 
var FilterHeader = React.createClass({
render: function(){
  return( 
        <View style={[styles.container, this.border('yellow')]}>
          <View style={[styles.headerTop, this.border('green')]}>
            <Image style={[styles.imageContainer, this.border('red')]} source={{uri: 'http://i.imgur.com/k58TZ8S.jpg'}} />
          </View>
          <View style={[styles.headerBottom, this.border('blue')]}>
              <Text style={styles.textStyle}>
                Omit your poison below...
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