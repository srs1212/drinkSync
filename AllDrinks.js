var AllDrinks = [
  { drinkName: 'Bijou',
    ingredients: ['Gin', 'Chartreuse', 'Vermouth', 'Dash of Bitters'],
    recipe: "Stir in mixing glass with ice and strain",
    alcohol: ['Gin'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bijou_Cocktail.jpg/220px-Bijou_Cocktail.jpg',
    drinkRating: {
      weatherValue:{
        wCold: 1,
        wMod: 2,
        wWarm: 4,
        wHot: 5
      },
      precipValue:{
        pNone: 3,
        pSome: 2
      },
      seasonValue:{
        sSpr: 3,
        sSum: 5,
        sFal: 2,
        sWin: 1
      },
      dayValue:{
        dMTRS: 2,
        dW: 4,
        dFS: 5
      },
      timeValue:{
        tMrn: 0,
        tAft: 3,
        tNt: 5,
        wSleep: 0
      }
  }
},

  { drinkName: 'Dark N Stormy',
    ingredients: ['6cl Dark Rum', '10cl Ginger Beer' ],
    recipe: "  In a highball glass filled with ice add 6cl dark rum and top with ginger beer. Garnish with lime wedge.",
    alcohol: ['Rum'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Dark_n_Stormy.jpg/220px-Dark_n_Stormy.jpg',
    drinkRating: {
      weatherValue:{
        wCold: 3,
        wMod: 3,
        wWarm: 4,
        wHot: 4
      },
      precipValue:{
        pNone: 3,
        pSome: 5
      },
      seasonValue:{
        sSpr: 3,
        sSum: 5,
        sFal: 4,
        sWin: 4
      },
      dayValue:{
        dMTRS: 2,
        dW: 4,
        dFS: 5
      },
      timeValue:{
        tMrn: 0,
        tAft: 3,
        tNt: 5,
        wSleep: 0
      }
    }
  },

  { drinkName: 'Long Island Iced Tea',
    ingredients: ['1.5 cl Tequila, 1.5 cl Vodka,1.5 cl White rum, 1.5 cl Triple sec, 1.5 cl Gin, 2.5 cl Lemon juice, 3.0 cl Gomme Syrup, 1 dash of Cola'],
    recipe: "Add all ingredients into highball glass filled with ice. Stir gently. Garnish with lemon spiral.",
    alcohol: ['Gin', 'Tequila', 'Vodka', 'Rum, Triple Sec'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Long_Island_Iced_Teas.jpg/220px-Long_Island_Iced_Teas.jpg',
    drinkRating: {
      weatherValue:{
        wCold: 1,
        wMod: 2,
        wWarm: 4,
        wHot: 4
      },
      precipValue:{
        pNone: 4,
        pSome: 3
      },
      seasonValue:{
        sSpr: 4,
        sSum: 5,
        sFal: 2,
        sWin: 2
      },
      dayValue:{
        dMTRS: 2,
        dW: 2,
        dFS: 5
      },
      timeValue:{
        tMrn: 0,
        tAft: 1,
        tNt: 5,
        wSleep: 0
      }
  }
},
];
  // {drinkName: 'Pink Lady',
  //   ingredients: ['1.5oz Gin', '4 dashes Grenadine', '1 egg white'],
  //   recipe: "Shake ingredients very well with ice and strain into cocktail glass. Garnish with a cherry.",
  //   alcohol: ['Gin'],
  //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Pink_Lady_with_a_twist_of_lime%2C_in_a_cocktail_glass.jpg/220px-Pink_Lady_with_a_twist_of_lime%2C_in_a_cocktail_glass.jpg"},
  // {drinkName: 'Between the Sheets',
  //   ingredients: ['lemon juice'],
  //   recipe: 'Pour all ingredients into shaker with ice cubes, shake, strain into chilled cocktail glass',
  //   alcohol: ['cognac', 'rum', 'triplesec'],
  //   image: 'http://recipes-drinks.ru/coctails/between-the-sheets.png'},
  // {drinkName: 'hurricane',
  //   ingredients: ['passion fruit syrup', 'lemon juice'],
  //   recipe: 'Shake ingredients with ice, then pour into the glass and serve over ice',
  //   alcohol: ['dark rum', 'white rum'],
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Hurricane_at_Pat_O%27Brien%27s.JPG/200px-Hurricane_at_Pat_O%27Brien%27s.JPG'},
  // {drinkName: 'tequila sunrise',
  //   ingredients: ['orange slice', 'cherry', 'grenadine syrup'],
  //   recipe: 'Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Do not stir. Garnish and serve.',
  //   alcohol: ['tequila'],
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tequila_Sunrise_garnished_with_orange_and_cherry_-_Evan_Swigart.jpg/220px-Tequila_Sunrise_garnished_with_orange_and_cherry_-_Evan_Swigart.jpg'}
  // ]

module.exports = AllDrinks;

