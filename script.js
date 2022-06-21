/* 
Created with passion by Corné Adema / 0xcorne
GitHub: https://github.com/0xcorne
*/

const myBirthday = '26 May 2023' // Change this if you want to change the birthday to yours

// Grabbing elements from the DOM
const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')


// Function that does the calculation 

const countdownTimer = () => {
    const myBirthdayTime = new Date(myBirthday)
    let currentTime = new Date()

    const totalSeconds = (myBirthdayTime - currentTime) / 1000;
    const daysTill = Math.floor(totalSeconds / 3600 / 24);
    const hoursTill = Math.floor(totalSeconds / 3600) % 24;
    const minutesTill = Math.floor(totalSeconds / 60) % 60
    const secondsTill = Math.floor(totalSeconds % 60)

    daysElement.innerHTML = daysTill;
    hoursElement.innerHTML = hoursTill;
    minutesElement.innerHTML = minutesTill;
    secondsElement.innerHTML = secondsTill;

    // Console.log I used to check if the calculations worked -- console.log(daysTill, hoursTill, minutesTill, secondsTill)
}

// Initial function call
countdownTimer()


// Interval timer, functions gets executed every second or 1000ms
setInterval(countdownTimer, 1000)
