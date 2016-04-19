jest.unmock('../DrinkList');
jest.unmock('../AllDrinks');
const DrinkList = require('../DrinkList');
var drinkDataTemp = [
  { drinkName: 'Bijou',
   	drinkRating: {
      weatherValue:{
        wCold: 1,
        wMod: 2,
        wWarm: 4,
        wHot: 5
      }, 
       precipValue:{
        pNone: 0,
        pSome: 0
      },     
  }
},

  { drinkName: 'Dark N Stormy',
	drinkRating: {
      weatherValue:{
        wCold: 3,
        wMod: 3,
        wWarm: 4,
        wHot: 4
      },
      precipValue:{
        pNone: 0,
        pSome: 0
      },
   }
  },

];

var drinkDataPrecip = [
  { drinkName: 'Bijou',
   	drinkRating: {
      weatherValue:{
        wCold: 0,
        wMod: 0,
        wWarm: 0,
        wHot: 0
      }, 
       precipValue:{
        pNone: 3,
        pSome: 2
      },     
  }
},

  { drinkName: 'Dark N Stormy',
	drinkRating: {
      weatherValue:{
        wCold: 0,
        wMod: 0,
        wWarm: 0,
        wHot: 0
      },
      precipValue:{
        pNone: 3,
        pSome: 5
      },
   }
  },

];

  var drinkDataTempAndPrecip = [
  { drinkName: 'Bijou',
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
  }
},

  { drinkName: 'Dark N Stormy',
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
   }
 }

];


describe('drinkList', () => {  //just return something not null
  it('works??', () => {
  	var drinkList = new DrinkList();
    expect(drinkList.bestDrink(60)).toBeTruthy();
  });

  it('returns Bijou when hot', () => { 
  	var drinkList = new DrinkList(drinkDataTemp);
    expect(drinkList.bestDrink(90).drinkName).toBe('Bijou');
  });

  it('returns DNS when its cold', () => { 
  	var drinkList = new DrinkList(drinkDataTemp);
    expect(drinkList.bestDrink(0).drinkName).toBe('Dark N Stormy');
  });

  it('returns DNS as highest rating when no rain in last hour', () => { 
  	var drinkList = new DrinkList(drinkDataPrecip);
  	var drinkNoRain = drinkList.bestDrink(0, 0);
  	var drinkWithRain = drinkList.bestDrink(0, .2);
    expect(drinkNoRain !== drinkWithRain).toBeTruthy();
  });

   it('returns DNS as highest rating when some rain in last hour', () => { 
  	var drinkList = new DrinkList(drinkDataPrecip);
  	// console.log("Last Test", drinkNoRain, drinkWithRain);
    expect(drinkList.bestDrink(0,.3).drinkName).toBe('Dark N Stormy');
  });

    it('returns Bijou summing Temp and Precip', () => { 
  	var drinkList = new DrinkList(drinkDataTempAndPrecip);
    expect(drinkList.bestDrink(90, 0).drinkName).toBe('Bijou');
  });



 

 });



