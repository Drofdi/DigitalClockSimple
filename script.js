"use strict";

window.addEventListener('load',calculateTime)

function calculateTime(){
    let dateNow = new Date()
    let dayNumber = dateNow.getDay()
    let hour = dateNow.getHours()
    let minute = dateNow.getMinutes()
    let second = dateNow.getSeconds()
    let dayNames = ['SUN','MON','TUE','WED','THU','FRI','SUT']

    let day = document.querySelector('.day')
    let hours = document.querySelector('.hours')
    let minutes = document.querySelector('.minutes')
    let seconds = document.querySelector('.seconds')

    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    second = second < 10 ? '0' + second : second

    day.innerHTML = dayNames[dayNumber]
    hours.innerHTML = hour
    minutes.innerHTML = minute
    seconds.innerHTML = second

    setTimeout(calculateTime, 300)
}