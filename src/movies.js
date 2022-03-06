// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

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
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let yearArr = [];
  movies.sort((a, b) => {
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

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
