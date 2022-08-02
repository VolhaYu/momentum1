const time = document.querySelector('.time');
const dateWeek = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
    // дата

function showDate() {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-US', options);
    dateWeek.textContent = currentDate;
};
function getTimeOfDay() {  //функция которая передает время суток
    const date = new Date();
    const hours = date.getHours();
    if(hours >= 6 && hours < 12) {
        return 'Good morning';
    }
    if(hours >= 12 && hours < 18) {
        return 'Good afternoon';
    }
    if(hours >= 18 && hours <= 23) {
        return 'Good evening';
    }
    if(hours >= 0 && hours < 6) {
        return 'Good night';
    }
};
getTimeOfDay();

function showGreeting() {
    greeting.textContent = getTimeOfDay();
};
//    время

function showTime() {
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

function setBg() {
    const timeOfDay = getTimeOfDay();
    let bgNum = getRandomNum(1,20);
    bgNum = bgNum.toString().padStart(2, '0');

    body.style.backgroundImage = "url(https://github.com/VolhaYu/stage1-tasks/blob/assets/images/evening/07.jpg)";

}
setBg();



console.log();
