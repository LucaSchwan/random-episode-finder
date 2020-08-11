import { getRandomEpisode } from './functions.js';

const init = () => {
  let button = document.getElementsByTagName('button');
  button[0].addEventListener('click', setSeasonEpisodes);
}

const setSeasonEpisodes = (ev) => {
  ev.preventDefault();
  let select = document.getElementsByTagName('select');
  let series = select[0].value;
  // switch (series) {
  //   case 'tbbt': 
  //     getRandomEpisode('tbbt');
  //     break;
  //   default:
  //     console.log('series not available')
  // }
  const { season, episode } = getRandomEpisode(series);
  let result = document.getElementsByTagName('h2');
  result[0].innerHTML = `season ${season} episode ${episode}`;
}

document.addEventListener('DOMContentLoaded', init) ; 