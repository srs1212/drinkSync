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
        dayValue:{
        dMTRS: 0,
        dW: 0,
        dFS: 0
      }, 
       timeValue:{
        tMrn: 0,
        tAft: 0,
        tNt: 0,
        tSleep: 0
      }     
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
        dayValue:{
        dMTRS: 0,
        dW: 0,
        dFS: 0
      }, 
       timeValue:{
        tMrn: 0,
        tAft: 0,
        tNt: 0,
        tSleep: 0
      }
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
       dayValue:{
        dMTRS: 0,
        dW: 0,
        dFS: 0
      },
       timeValue:{
        tMrn: 0,
        tAft: 0,
        tNt: 0,
        tSleep: 0
      }     
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
        dayValue:{
        dMTRS: 0,
        dW: 0,
        dFS: 0
      }, 
       timeValue:{
        tMrn: 0,
        tAft: 0,
        tNt: 0,
        tSleep: 0
      }
   }
  },

];

var drinkDataDay = [
  { drinkName: 'Bijou',
    drinkRating: {
      weatherValue:{
        wCold: 0,
        wMod: 0,
        wWarm: 0,
        wHot: 0
      }, 
       precipValue:{
        pNone: 0,
        pSome: 0
      }, 
      dayValue:{
        dMTRS: 2,
        dW: 4,
        dFS: 5
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
        pNone: 0,
        pSome: 0
      },
       dayValue:{
        dMTRS: 3,
        dW: 5,
        dFS: 5
      },

   }
  },

];

  var drinkDataAllSum = [
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
      dayValue:{
        dMTRS: 2,
        dW: 4,
        dFS: 5
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
       dayValue:{
        dMTRS: 2,
        dW: 5,
        dFS: 5
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
  	var drinkList = new DrinkList(drinkDataAllSum);
    expect(drinkList.bestDrink().drinkName).toBe('Bijou');
  });

  it('returns DNS on day alone', () => { //First test on Day
    var drinkList = new DrinkList(drinkDataDay);
    expect(drinkList.bestDrink().drinkName).toBe('Dark N Stormy');
  });


 

 });


console.log("SCORE", dayValue(drink, day), drink.drinkName, score);


