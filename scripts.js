startBtn = document.getElementById("start-btn")
pauseBtn = document.getElementById("pause-btn")
restartBtn = document.getElementById("restart-btn")

timerEl = document.getElementById("timer")
timer = timerEl.textContent


let [hours, minutes, seconds] = timer.split(":").map(Number)

// converts time to seconds
totalSec = (hours*3600) + (minutes*60) + (seconds)

let interval


startBtn.addEventListener('click', function() {
    startBtn.disabled = true
    interval = setInterval(function() {
        pauseBtn.disabled = false
        totalSec -= 1
        console.log(totalSec)

        hours = Math.floor(totalSec/3600)
        minutes = Math.floor((totalSec%3600)/60)
        seconds = Math.floor(((totalSec%3600)%60))

        timerEl.textContent = `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`

    }, 1000)
})

pauseBtn.addEventListener('click', function() {
    startBtn.disabled = false
    pauseBtn.disabled = true
    clearInterval(interval)
})

restartBtn.addEventListener('click', function() {
    startBtn.disabled = false
    pauseBtn.disabled = false
    clearInterval(interval)
    
    timerEl.textContent = '00:25:00'
    hours = 0
    minutes = 25
    seconds = 0
    totalSec = (hours*3600) + (minutes*60) + (seconds)
})