const time = document.querySelector('.time');
const dateWeek = document.querySelector('.date');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString(); 
    time.textContent = currentTime;
    setTimeout(showTime, 1000);

    function showDate() {
        const date = new Date();
        const options = {weekday: 'long', month: 'long', day: 'numeric'};
        const currentDate = date.toLocaleDateString('en-US', options);
        dateWeek.textContent = currentDate;
    }
    showDate();
 
}
showTime();

const greeting = document.querySelector('.greeting');
const date = new Date();
const hours = date.getHours();




console.log(hours);
