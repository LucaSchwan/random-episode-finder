import { tbbt, himym, b99 } from './series.js';

function getRandomEpisode (series) {
  // get random number for the seasons

  let length = eval(`Object.keys(${series}).length`); 
  const season = Math.floor(Math.random() * length) + 1;

  // get random number for episodes of said season
  
  length = eval(`${series}[${season} - 1]`);
  const episode = Math.floor(Math.random() * length) + 1;
  
  return { season, episode };
}

export { getRandomEpisode };