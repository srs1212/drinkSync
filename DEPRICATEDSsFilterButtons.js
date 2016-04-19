'use strict';

var React = require('react-native');
var Button = require('apsl-react-native-button');


var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
  },
  sweetFilter: { 
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  orContainer: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  savoryFilter: { 
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: .5,
  },
  buttonStyleUp: {
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  buttonStyleDown: {
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: .5,
  },
  base: {
   width: 100,
   height: 100,
   overflow: 'visible',
    // opacity: .5
    // borderColor: 'red',
    // borderWidth: 2
 },
 touchableOpacityStyle: {
   width: 100,
   height: 100,
   overflow: 'visible',
   opacity: .5,
    // opacity: .5
    // borderColor: 'red',
    // borderWidth: 2
 },
});


var SsFilterButtons = React.createClass({
  chooseButtonStyle: function(item){
      if (this.props.sweetValue === item){
        return styles.buttonStyleDown
      } else {
        return styles.buttonStyleUp
      }
  },
  setButtonState: function(item){
    // console.log('in set button state', this.props.sweetValue);
      // var sweetValueState = this.props.sweetValue;
      // if (this.props.sweetValue === 'neet'){
      //   this.props.handleSweetValueState('neet')
      // } else if (this.props.sweetValue === 'sweet'){
      //   this.props.handleSweetValueState('sweet')
      // } else {
      //   console.log('is null');
      // }
      // var index = stateArray.indexOf(item)
      // if(stateArray.indexOf(item) == -1){
      //   stateArray.push(item);
      // } else {
      //   stateArray.splice(index, 1);
      // }
      // this.setState({
      //   filterAlcohol: stateArray
      // });
  },
  render: function(){
    // console.log('in set button state', this.props.sweetValue);
    // console.log('in ss filter button', this.props.handleSweetValueState);
    return( 
          <View style={styles.container}>
              <View style={[styles.sweetFilter, this.border('red')]}>

              </View>
            <View style={[styles.orContainer, this.border('green')]}>
              <Text>
                OR
              </Text>
            </View>
            <View style={[styles.chooseButtonStyle(), this.border('yellow')]}>
              <TouchableOpacity onPress={() => {this.props.handleSweetValueState('sweet')}}>
                <Image style={styles.base} source={{uri: 'http://i.imgur.com/B2b8Qbz.png'}}  />
              </TouchableOpacity>
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


module.exports = SsFilterButtons;
