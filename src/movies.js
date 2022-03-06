// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require('./data');

function getAllDirectors(movies) {
  let mappedArray = [];
  let filteredArray = [];

  movies.map((data1) => {
    mappedArray.push(data1.director);
  });

  movies.filter((data1, data2) => {
    if (data1.director != data2.director) {
      filteredArray.push[data1];
    }
  });

  return mappedArray;
  return filteredArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spilbergFilms = [];

  movies.map((data1) => {
    if (data1.director == 'Steven Spielberg' && data1.genre.includes('Drama')) {
      spilbergFilms.push(data1);
    }
  });

  return spilbergFilms.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let scoreData = 0;

  if (movies.length == 0) {
    return 0;
  }

  movies.map((data1) => {
    if (data1.score != undefined) {
      scoreData += data1.score;
    }
  });

  let scoreAvg = scoreData / movies.length;
  return Number(scoreAvg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let filteredArray = [];
  let sumDramaScore = 0;

  filteredArray = movies.filter((data1) => data1.genre.includes('Drama'));

  if (filteredArray.length == 0) {
    return 0;
  }

  filteredArray.map((data1) => {
    sumDramaScore += data1.score;
  });

  let scoreAvgDrama = sumDramaScore / filteredArray.length;
  return Number(scoreAvgDrama.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let yearOrder = [];
  if (movies.length == 0) {
    return yearOrder;
  }

  yearOrder = movies.sort((a, b) => {
    if (a.year == b.year) {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    }
    return a.year - b.year;
  });

  return yearOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let moviesOrdered = [];

  movies.map((data1) => {
    moviesOrdered.push(data1.title);
  });

  moviesOrdered.sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  let top20 = moviesOrdered.splice(0, 20);

  return top20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {
  let newArrminutes = [];

  /*  movies.map((data1) => {
    newArrminutes.push(data1);
  }); */
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
