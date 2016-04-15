'use strict';

var React = require('react-native');
var MainNav = require('./MainNav');

var drinkData = 
{ drinkData: [
  {drinkName: 'Bijou',
  ingredients: ['Gin', 'Chartreuse', 'Vermouth', 'Dash of Bitters'],
  recipe: "Stir in mixing glass with ice and strain",
  alcohol: ['Gin'],
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bijou_Cocktail.jpg/220px-Bijou_Cocktail.jpg'},
  {drinkName: 'Dark N Stormy',
  ingredients: ['6cl Dark Rum', '10cl Ginger Beer' ],
  recipe: "  In a highball glass filled with ice add 6cl dark rum and top with ginger beer. Garnish with lime wedge.",
  alcohol: ['Rum'],
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Dark_n_Stormy.jpg/220px-Dark_n_Stormy.jpg'},
  {drinkName: 'Pink Lady',
  ingredients: ['1.5oz Gin', '4 dashes Grenadine', '1 egg white'],
  recipe: "Shake ingredients very well with ice and strain into cocktail glass. Garnish with a cherry.",
  alcohol: ['Gin'],
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Pink_Lady_with_a_twist_of_lime%2C_in_a_cocktail_glass.jpg/220px-Pink_Lady_with_a_twist_of_lime%2C_in_a_cocktail_glass.jpg"},
  {drinkName: 'Between the Sheets',
  ingredients: ['lemon juice'],
  recipe: 'Pour all ingredients into shaker with ice cubes, shake, strain into chilled cocktail glass',
  alcohol: ['cognac', 'rum', 'triplesec'],
  image: 'http://recipes-drinks.ru/coctails/between-the-sheets.png'},
  {drinkName: 'hurricane',
  ingredients: ['passion fruit syrup', 'lemon juice'],
  recipe: 'Shake ingredients with ice, then pour into the glass and serve over ice',
  alcohol: ['dark rum', 'white rum'],
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Hurricane_at_Pat_O%27Brien%27s.JPG/200px-Hurricane_at_Pat_O%27Brien%27s.JPG'},
  {drinkName: 'tequila sunrise',
  ingredients: ['orange slice', 'cherry', 'grenadine syrup'],
  recipe: 'Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Do not stir. Garnish and serve.',
  alcohol: ['tequila'],
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tequila_Sunrise_garnished_with_orange_and_cherry_-_Evan_Swigart.jpg/220px-Tequila_Sunrise_garnished_with_orange_and_cherry_-_Evan_Swigart.jpg'}
]};

var userLocation = '59802';
var fetchUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=' + userLocation + ',us&appid=22a1e092f3c7508f8ed419614d5ae7b5';

var DataAndLogic = React.createClass({
  getInitialState: function(){
    return {
      location: '',
      temp: 0
      }
  },
  componentDidMount: function(){
    this.fetchWeatherData();
  },
  convertToFahrenheit: function(value) {
    return ((value - 273.15)*9/5) + 32;
  },
  fetchWeatherData: function(){
    var location = ''
    var temp = 0
    fetch(fetchUrl)
    .then((response) => response.json())
    .then((responseText) => {
      location = responseText.name;
      temp = this.convertToFahrenheit(responseText.main.temp)
      this.setState({
        location: location,
        temp: temp
      });
    })
    .catch((error) => {
      console.warn(error);
    });
  },
  render: function(){
    return( 
            <MainNav
            location = {this.state.location}
            temp = {this.state.temp}
            />
          )
    }
}); 


module.exports = DataAndLogic;
