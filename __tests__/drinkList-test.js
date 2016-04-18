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
			wA: 1,
			wB: 2,
			wC: 4,
			wD: 5
		},
	}
},

{ drinkName: 'Dark N Stormy',
	ingredients: ['6cl Dark Rum', '10cl Ginger Beer' ],
	drinkRating: {
		weatherValue:{
			wA: 3,
			wB: 3,
			wC: 4,
			wD: 4
		},
	}, 
}
];

describe('drinkList', () => {
  it('works??', () => {
  	var drinkList = new DrinkList();
    expect(drinkList.bestDrinkOfTemp(60)).toBeTruthy();
  });

  it('returns Bijou when hot', () => {
  	var drinkList = new DrinkList(DrinkData);
    expect(drinkList.bestDrinkOfTemp(90).drinkName).toBe('Bijou');
  });

  it('returns DNS when its cold', () => {
  	var drinkList = new DrinkList(DrinkData);
    expect(drinkList.bestDrinkOfTemp(0).drinkName).toBe('Dark N Stormy');
  });

});