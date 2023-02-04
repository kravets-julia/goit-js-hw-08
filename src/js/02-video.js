import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// import { throttle } from 'throttle-debounce';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);


    const KEY = 'videoplayer-current-time';
    
    videoStorage()


    player.on('timeupdate', function (time) {
       
        throttle (localStorage.setItem(KEY, `${time.seconds}`), 1000)
        console.log(time)});

function videoStorage(){
    const storage = localStorage.getItem(KEY)
    if (storage) 
    {player.setCurrentTime(localStorage.getItem(KEY))}
    console.log(storage)
}

   