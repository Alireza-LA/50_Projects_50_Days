const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

toggleEl.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    }
    else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})

let prevSec = 0
let secDeg = 0

function setTime() {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    if (seconds === 0 && prevSec === 59) {
        secDeg += 6
    } else if (seconds > prevSec) {
        secDeg += 6
    }
    prevSec = seconds

    const hourDeg = (hours % 12) * 30 + minutes * 0.5
    const minDeg = minutes * 6 + seconds * 0.1

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minDeg}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${secDeg}deg)`

    const ampm = hours >= 12 ? 'PM' : 'AM'
    timeEl.innerHTML = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`
    dateEl.innerHTML = `${days[time.getDay()]}, ${months[time.getMonth()]} <span class="circle">${time.getDate()}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setInterval(setTime, 1000)