const time = document.querySelector('.time');
const dateWeek = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
    // дата

function showDate() { //вывод даты
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-US', options);
    dateWeek.textContent = currentDate;
};
function getTimeOfDay() {  //функция которая передает время суток
    const date = new Date();
    const hours = date.getHours();
    if(hours >= 6 && hours < 12) {
        return 'morning';
    }
    if(hours >= 12 && hours < 18) {
        return 'afternoon';
    }
    if(hours >= 18 && hours <= 23) {
        return 'evening';
    }
    if(hours >= 0 && hours < 6) {
        return 'night';
    }
};
getTimeOfDay();

  // приветствие

function showGreeting() {     
    const timeOfDay = getTimeOfDay();
    let greetingTranslation = {
        en: `Good ${timeOfDay}`,
        ru: `Привет` 
    };
    greeting.textContent = greetingTranslation.en;
};
//    время

function showTime() { //вывод времени
    const date = new Date();
    const currentTime = date.toLocaleTimeString(); 
    time.textContent = currentTime;
    setTimeout(showTime, 1000);

    showDate();
    showGreeting(); 
}
showTime();
//   ввод имени

const name = document.querySelector('.name');
function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);
  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage);

    //  слайдер изображений
const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

function getRandomNum(min, max) {  //рандомное число от 1 до 20 включительно
    min = Math.ceil(min);
    max = Math.floor(max);    
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }
let bgNum = getRandomNum(1,20);

function setBg() {  //случайное изображение
    const timeOfDay = getTimeOfDay();
    let randomNum = bgNum.toString().padStart(2, "0");
    const img = new Image();  
    img.src = `https://raw.githubusercontent.com/VolhaYu/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
    img.onload = () => {  // чтобы изображение сначала догрузилось, а потом отображалось
        body.style.backgroundImage = `url(${img.src})`;
    }
}
setBg();

function getSlideNext() {  // перелистывание изобр-ий по порядку вперед
    if(bgNum === 20) {
        bgNum = 1;
    } else {
        bgNum++; 
    }; 
    setBg();
    console.log(bgNum); 
}

function getSlidePrev() {  // назад 
    if(bgNum === 1) {
        bgNum = 20;
    } else {
        bgNum--; 
    }  
    setBg();
}
slidePrev.addEventListener('click', getSlidePrev);  //вызов при клике на стрелки
slideNext.addEventListener('click', getSlideNext);

  //виджет погоды
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');

async function getWaeter() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=ecea04712645dfb0bce29087590fddfd&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    try {
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `wind speed: ${Math.round(data.wind.speed)} m/s`;
        humidity.textContent = `humidity: ${Math.round(data.main.humidity)}%`;
        weatherError.textContent = weatherError.value;
    }
    catch {
        weatherError.textContent = `Error! Nothing to geocode for ''!`;
        temperature.textContent = temperature.value;
        weatherDescription.textContent = weatherDescription.value;
        wind.textContent = wind.value;
        humidity.textContent = humidity.value;
    }
  }
const city = document.querySelector('.city'); // погода для определенного города
city.addEventListener('change', getWaeter);

function setLocalStorageCity() { //сохранение города после обновления
    localStorage.setItem('city', city.value);
    getWaeter();
  }
  window.addEventListener('beforeunload', setLocalStorageCity);
  function getLocalStorageCity() {
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
    getWaeter();
  }
  window.addEventListener('load', getLocalStorageCity);

  //цитата дня
const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    let randomQ = Math.floor(Math.random() * data.length)
    const dataValue = data[randomQ];
    if(randomQ === dataValue) {
        randomQ + 1;
    }
    quote.textContent = `${dataValue.text}`;
    author.textContent = `${dataValue.author}`;
}
getQuotes();
changeQuote.addEventListener('click', getQuotes);

//аудиоплеер

const prevPlay = document.querySelector('.play-prev');
const play = document.querySelector('.play');
const nextPlay = document.querySelector('.play-next');
let playItem = document.querySelectorAll('.play-item');
let isPlay = false; //переменная флаг(м/б false или true)
let playNum = 0; // номер трека(первый по индексу)
import playList from "./playList.js";

const volume = document.querySelector('.play-volume'); // для продвтнутого плеера
const volumeRange = document.querySelector('.volume-range');
const nameSong = document.querySelector('.name-song');
const currentTime = document.querySelector('.current-time');
const trackTime = document.querySelector('.track-time');
const progressRange = document.querySelector('.progress-range');
const playTrack = document.querySelectorAll('.play-track');

const audio = new Audio(); //создание аудио

function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
  nameSong.textContent = playList[playNum].title;
  trackTime .textContent = playList[playNum].duration;
  audio.volume = 0.2;
  itemStyle();
};
  
function trackClick() {  // кнопка play возле названия
    for(let i = 0; i < playTrack.length; i++) {
        playTrack[i].addEventListener('click',() =>{
            playTrack[i].classList.toggle('pause');
            play.classList.toggle('pause');
        })
    }

}; 
trackClick();

function pauseAudio() {
    isPlay = false;
    audio.pause();
  }

function playPause() {  // включение - выключение трека
    if(isPlay === true) {
        pauseAudio();

    }else {
        playAudio();
    }
}
play.addEventListener('click', () => { //смена картинки на паузу и обратно
    play.classList.toggle('pause');
    playPause();
});

function playNext() {
    if(playNum === 3) {  //переключение песен по кругу
        playNum = 0;
    }else {
        playNum++;
    }
    playAudio();
}
audio.addEventListener('ended', playNext);

function playPrev() {
    if(playNum === 0) {
        playNum = 3;
    }else {
        playNum--;
    }
    playAudio();
}
nextPlay.addEventListener('click', () =>{ //при клике на на след трек в право
    play.classList.add('pause');
    playAudio();
    playNext();
});
prevPlay.addEventListener('click', () => {  //влево
    play.classList.add('pause');
    playAudio();
    playPrev();
});
function itemStyle() { // выделение трека кот играет
    for(let item of playItem) {
        item.classList.remove('active'); 
    }
    playItem[playNum].classList.add('active'); 
};
let isMute = false;
function volumeOff() {    
    volume.classList.toggle('volume-off');
    audio.muted = true;
    isMute = true;
    volumeRange.value = 0;
}
function volumeUp() {
    volume.classList.toggle('volume-off');
    audio.muted = false;
    isMute = false;
    volumeRange.value = 50;
}
function muteVolume() {   // вкл, выкл звука
    if(!isMute) {
        volumeOff();
    }else {
        volumeUp();
    }
}
function changeVolume() { //изменение громкости
    let vol = volumeRange.value;
    audio.volume = vol / 100;
}
volumeRange.addEventListener('input', changeVolume);
volume.addEventListener('click', muteVolume);

function progressBar() {    //движение ползунка в прогресс баре
    progressRange.max = audio.duration;
    progressRange.value = audio.currentTime;
    currentTime.innerHTML = (formatTime(Math.floor(audio.currentTime)));
};
function formatTime(seconds) {  
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};
setInterval(progressBar, 500);
function changeProgressBar() {  // счет врмени от начала проигрывания
    currentTime.textContent = progressRange.value;
};
changeProgressBar();
//настройки приложения
const setting = document.querySelector('.setting');
const form = document.querySelector('.form');
const windowClose = document.querySelector('.window-close');

setting.addEventListener('click', () => { //открыть настройки
    form.classList.toggle('form-active');
});
windowClose.addEventListener('click', (e) => { //закрыть настройки при клике на крестик
    form.classList.remove('form-active');
    e.stopPropagation();
});

// спрятать/показать блок
const hideTime = document.querySelector('.hide-time');
const hideDate = document.querySelector('.hide-date');
const hideGreeting = document.querySelector('.hide-greetings');
const hidePlayer = document.querySelector('.hide-player');
const hideWeather = document.querySelector('.hide-weather');
const hideQuote = document.querySelector('.hide-quote');
const labelClick = document.querySelectorAll('.label-click');
const label = document.querySelectorAll('.label');
const input = document.querySelectorAll('.input');

function hideBlock () {
    for(let i = 0; i < labelClick.length; i++) {
        if(i === 0) {
            labelClick[i].addEventListener('click', (e) => {
                hideTime.classList.toggle('hide-block');
                let target = e.target;
                if(target === labelClick[i]) {
                    hideTime.classList.toggle('hide-block');                    
                }
                e.stopPropagation();
            });            
        }
        if(i === 1) {
            labelClick[i].addEventListener('click', (e) => {
                hideDate.classList.toggle('hide-block');
                let target = e.target;
                if(target === labelClick[i]) {
                    hideDate.classList.toggle('hide-block');
                }
                e.stopPropagation(); 
            });
        }
        if(i === 2) {
            labelClick[i].addEventListener('click', (e) => {
                hideGreeting.classList.toggle('hide-block');
                let target = e.target;
                if(target === labelClick[i]) {
                    hideGreeting.classList.toggle('hide-block');
                }
                e.stopPropagation(); 
            });
        }
        if(i === 3) {
            labelClick[i].addEventListener('click', (e) => {
                hideQuote.classList.toggle('hide-block');
                let target = e.target;
                if(target === labelClick[i]) {
                    hideQuote.classList.toggle('hide-block');
                }
                e.stopPropagation(); 
            });
        }
        if(i === 4) {
            labelClick[i].addEventListener('click', (e) => {
                hideWeather.classList.toggle('hide-block');
                let target = e.target;
                if(target === labelClick[i]) {
                    hideWeather.classList.toggle('hide-block');
                }
                e.stopPropagation(); 
            });
        }
        if(i === 5) {
            labelClick[i].addEventListener('click', (e) => {
                hidePlayer.classList.toggle('hide-block');
                let target = e.target;
                if(target === labelClick[i]) {
                    hidePlayer.classList.toggle('hide-block');
                }
                e.stopPropagation(); 
            });
        }
    }
}
hideBlock();






