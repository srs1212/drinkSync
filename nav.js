
var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var FilterDrinkData = require('./filterDrinkData');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicatorIOS,
  Image,
  ScrollView,
  Component,
} = React;


class FilterPage extends Component {
  render() {
    return (
      <ScrollView>
          <Image source={{uri: "https://snaplogic-h.s3.amazonaws.com/uploads/snap/image/30/filter.jpg"}} 
          style={{flex: 1, height: 320}} resizeMode="contain" />
      </ScrollView>
    );
  }
}

class DrinkPage extends Component {
  render() {
    return (
    	<View> 
    	<FilterDrinkData />
    	</View>
    	)
  }
};


class Nav extends Component {
  render() {
    return (
      <ScrollableTabView style={{marginTop: 20, }}>
      <FilterPage tabLabel='Filter'/>
      <DrinkPage tabLabel='Drink'/>
   	  </ScrollableTabView> 
    )
  }
}



module.exports = Nav;