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
      seasonValue:{
        sSpr: 0,
        sSum: 0,
        sFal: 0,
        sWin: 0
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
       seasonValue:{
        sSpr: 0,
        sSum: 0,
        sFal: 0,
        sWin: 0
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
       seasonValue:{
        sSpr: 0,
        sSum: 0,
        sFal: 0,
        sWin: 0
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
       seasonValue:{
        sSpr: 0,
        sSum: 0,
        sFal: 0,
        sWin: 0
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
       seasonValue:{
        sSpr: 0,
        sSum: 0,
        sFal: 0,
        sWin: 0
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
        pNone: 0,
        pSome: 0
      },
       dayValue:{
        dMTRS: 3,
        dW: 5,
        dFS: 5
      },
       seasonValue:{
        sSpr: 0,
        sSum: 0,
        sFal: 0,
        sWin: 0
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

  var drinkDataAllSum = [
  { drinkName: 'Bijou',
    drinkRating: {
      weatherValue:{
        wCold: 1,
        wMod: 2,
        wWarm: 5,
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
       seasonValue:{
        sSpr: 3,
        sSum: 5,
        sFal: 2,
        sWin: 1
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
        seasonValue:{
        sSpr: 3,
        sSum: 5,
        sFal: 4,
        sWin: 4
      },
      timeValue:{
        tMrn: 0,
        tAft: 3,
        tNt: 5,
        tSleep:0
   }
 }
}

];


describe('drinkList', () => {  //just return something not null
  xit('works??', () => {
    var drinkList = new DrinkList();
    expect(drinkList.bestDrink(60)).toBeTruthy();
  });

  xit('returns Bijou when hot', () => { 
    var drinkList = new DrinkList(drinkDataTemp);
    expect(drinkList.bestDrink(90).drinkName).toBe('Bijou');
  });

  xit('returns DNS when its cold', () => { 
    var drinkList = new DrinkList(drinkDataTemp);
    expect(drinkList.bestDrink(0).drinkName).toBe('Dark N Stormy');
  });

  xit('returns DNS as highest rating when no rain in last hour', () => { 
    var drinkList = new DrinkList(drinkDataPrecip);
    var drinkNoRain = drinkList.bestDrink(0, 0);
    var drinkWithRain = drinkList.bestDrink(0, .2);
    expect(drinkNoRain !== drinkWithRain).toBeTruthy();
  });

  xit('returns DNS as highest rating when some rain in last hour', () => { 
    var drinkList = new DrinkList(drinkDataPrecip);
    // console.log("Last Test", drinkNoRain, drinkWithRain);
    expect(drinkList.bestDrink(0,.3).drinkName).toBe('Dark N Stormy');
  });

  xit('returns Bijou summing Temp and Precip', () => { 
    var drinkList = new DrinkList(drinkDataAllSum);
    expect(drinkList.bestDrink().drinkName).toBe('Bijou');
  });

  xit('returns DNS on day alone', () => { //First test on Day
    var drinkList = new DrinkList(drinkDataDay);
    expect(drinkList.bestDrink().drinkName).toBe('Dark N Stormy');
  });

  xit('returns Bijou with Sum', () => { //Summing temp,precip and day
    //Score should be Bi 83/DNS 79.
    var drinkList = new DrinkList(drinkDataAllSum);
    expect(drinkList.bestDrink().drinkName).toBe('Bijou');
  });

  xit('returns Bijou with Sum', () => { //Summing all but time
    //Score should be Bi 104/DNS 100.
    var drinkList = new DrinkList(drinkDataAllSum);
    expect(drinkList.bestDrink().drinkName).toBe('Bijou');
  });

  it('returns Bijou with all summed', () => { //Summing -above 2 tests should fail, but they have passed
    //Score should be Bi 128/DNS 124. ==all passing w/ correct scores.
    var drinkList = new DrinkList(drinkDataAllSum);
    expect(drinkList.bestDrink().drinkName).toBe('Bijou');
  });



 

 });



