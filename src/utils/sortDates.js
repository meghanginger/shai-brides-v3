export const monthsMap = {
  "JAN": 0,
  "FEB": 1,
  "MAR": 2,
  "APR": 3,
  "MAY": 4,
  "JUN": 5,
  "JUL": 6,
  "AUG": 7,
  "SEP": 8,
  "OCT": 9,
  "NOV": 10,
  "DEC": 11
};

/*
export const sortDates = ({ shows }) => {
   let filteredShows = shows.filter(show => {
      showMonth = monthsMap[show.month];
      showDate = `${show.day}/${showMonth}/${show.year}`;

  });
  return filteredShows;
};
*/

export const getFutureShows = (shows) => {
  let today = new Date();
  let filteredShows;
  console.log(today);
  filteredShows = shows.filter(show => {
    let showDate = new Date(show.year, monthsMap[show.month], (show.day + 1));
    console.log(showDate);
    console.log(`Comparison: ${today - showDate}`);
    return (today < showDate);
  });

  console.log(filteredShows);
  return filteredShows;
}

