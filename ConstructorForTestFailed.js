jest.unmock('../DrinkList');
jest.unmock('../AllDrinks');
const DrinkList = require('../DrinkList');

function getEmptyDrink() {
  return { 
    drinkName: 'Empty Drink',
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
      seasonValue:{
        sSpr: 0,
        sSum: 0,
        sFal: 0,
        sWin: 0
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
  };
};

function getNewTestingArray(name1, name2) {
  var arr = [getEmptyDrink(), getEmptyDrink()];
  arr[0].name = name1;
  arr[1].name = name2;
};

function setWeatherValues(drink, wCold, wMod, wWarm, wHot) {
  drink.drinkRating.weatherValue.wCold = wCold;
  drink.drinkRating.weatherValue.wMod = wMod;
  drink.drinkRating.weatherValue.wWarm = wWarm;
  drink.drinkRating.weatherValue.wHot = wHot;
};

var drinkDataTemp = getNewTestingArray('Bijou', 'Dark N Stormy');
  setWeatherValues(drinkDataTemp[0], 1, 2, 4, 5);
  setWeatherValues(drinkDataTemp[1], 3, 3, 4, 4);

function setPrecipValues(drink, pNone, pSome) {
  drink.drinkRating.precipValue.pNone = pNone;
  drink.drinkRating.precipValue.pSome = pSome;
};

var drinkDataPrecip = getNewTestingArray('Bijou', 'Dark N Stormy');
  setPrecipValues(drinkDataPrecip[0], 3, 2);
  setPrecipValues(drinkDataPrecip[1], 3, 5);

function setDayValues(drink, dMTRS, dW, dFS) {
  drink.drinkRating.dayValue.dMTRS = dMTRS;
  drink.drinkRating.dayValue.dW = dW;
  drink.drinkRating.dayValue.dFS = dFS;
};

var drinkDataDay = getNewTestingArray('Bijou', 'Dark N Stormy');
setDayValues(drinkDataDay[0], 2, 4, 5);
setDayValues(drinkDataDay[1], 2, 5, 5);

function setSeasonValues(drink, sSpr, sSum, sFal, sWin) {
  drink.drinkRating.seasonValue.sSpr = sSpr;
  drink.drinkRating.seasonValue.sSum = sSum;
  drink.drinkRating.seasonValue.sFal = sFal;
  drink.drinkRating.seasonValue.sWin = sWin;
};

var drinkDataSeason = getNewTestingArray('Bijou', 'Dark N Stormy');
setSeasonValues(drinkDataSeason[0], 3, 5, 2, 1);
setSeasonValues(drinkDataSeason[1], 3, 5, 4, 4);

function setTimeValues(drink, tMrn, tAft, tNt, tSleep) {
  drink.drinkRating.timeValue.tMrn = tMrn;
  drink.drinkRating.timeValue.tAft = tAft;
  drink.drinkRating.timeValue.tNt = tNt;
  drink.drinkRating.timeValue.tSleep = tSleep;
};

var drinkDataTime = getNewTestingArray('Bijou', 'Dark N Stormy');
setTimeValues()(drinkDataTime[0], 0, 3, 5, 0);
setTimeValues()(drinkDataTime[1], 0, 1, 5, 0);


var drinkDataSum = [
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
        tSleep: 0
      }
    }
  },
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



