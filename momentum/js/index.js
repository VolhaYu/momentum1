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

function showGreeting() { // приветствие
    const timeOfDay = getTimeOfDay();
    greeting.textContent = `Good ${timeOfDay}`;
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


function getRandomNum(min, max) {  //рандомное число от 1 до 20 включительно
    min = Math.ceil(min);
    max = Math.floor(max);    
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }

function setBg() {  //случайное изображение
    const timeOfDay = getTimeOfDay();
    let bgNum = getRandomNum(1,20);
    let randomNum = bgNum.toString().padStart(2, '0');
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/VolhaYu/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
      }

}
setBg();

const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');
let randomNum;

function getSlideNext() {
    setBg(); 
    randomNum = 0;
    if(randomNum == 20) {
        randomNum = 01;
    } else {
        randomNum++; 
    }  
}
function getSlidePrev() {
    setBg(); 
    if(randomNum == 1) {
        randomNum = 20;
    } else {
        randomNum--; 
    }    
}
slidePrev.addEventListener('click', getSlidePrev);
slideNext.addEventListener('click', getSlideNext);


console.log();
