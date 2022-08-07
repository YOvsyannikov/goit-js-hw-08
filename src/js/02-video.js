import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

let savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(savedTime);
} else {
  player.setCurrentTime(0);
}
