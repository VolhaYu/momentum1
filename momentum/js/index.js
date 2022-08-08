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
    img.onload = () => {  // чтобы изображение сначала догрузилось, а потом отображалось
        body.style.backgroundImage = `url(${img.src})`;
    }

}
setBg();

const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');
let randomNum;

function getSlideNext() {  // перелистывание изобр-ий по порядку вперед
    setBg(); 
    randomNum = 0;
    if(randomNum == 20) {
        randomNum = 01;
    } else {
        randomNum++; 
    }  
}
function getSlidePrev() {  // назад
    setBg(); 
    if(randomNum == 1) {
        randomNum = 20;
    } else {
        randomNum--; 
    }    
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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=ecea04712645dfb0bce29087590fddfd&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    try {
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `скорость ветра: ${Math.round(data.wind.speed)} м/с`;
        humidity.textContent = `влажность: ${Math.round(data.main.humidity)}%`;
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
getWaeter();
const city = document.querySelector('.city'); // погода для определенного города
city.addEventListener('change', getWaeter);
function setLocalStorageCity() { 
    localStorage.setItem('city', city.value);
    city.value = 'Минск';
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
