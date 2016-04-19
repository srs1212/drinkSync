jest.unmock('../DrinkList');
jest.unmock('../AllDrinks');
const DrinkList = require('../DrinkList');

var DrinkData = [
{ drinkName: 'Bijou',
	ingredients: ['Gin', 'Chartreuse', 'Vermouth', 'Dash of Bitters'],
	recipe: "Stir in mixing glass with ice and strain",
	alcohol: ['Gin'],
	image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bijou_Cocktail.jpg/220px-Bijou_Cocktail.jpg',
	sweetNeat: "sweet",
	drinkRating: {
		weatherValue:{
			wCold: 1,
			wMod: 2,
			wWarm: 4,
			wHot: 5
		},
	}
},

{ drinkName: 'Dark N Stormy',
	ingredients: ['6cl Dark Rum', '10cl Ginger Beer' ],
	drinkRating: {
		weatherValue:{
			wCold: 3,
			wMod: 3,
			wWarm: 4,
			wHot: 4
		},
	}, 
}
];

describe('drinkList', () => {  //just return something not null
  it('works??', () => {
  	var drinkList = new DrinkList();
    expect(drinkList.bestDrinkOfTemp(60)).toBeTruthy();
  });

  it('returns Bijou when hot', () => { //using fake data this file but bestOfDrinkOfTemp () from DrinkList, return Bijou
  	var drinkList = new DrinkList(DrinkData);
    expect(drinkList.bestDrinkOfTemp(90).drinkName).toBe('Bijou');
  });

  it('returns DNS when its cold', () => { //using fake data this file, bestOfDrinkOfTemp () from DrinkList, return DNS 
  	var drinkList = new DrinkList(DrinkData);
    expect(drinkList.bestDrinkOfTemp(0).drinkName).toBe('Dark N Stormy');
  });

});