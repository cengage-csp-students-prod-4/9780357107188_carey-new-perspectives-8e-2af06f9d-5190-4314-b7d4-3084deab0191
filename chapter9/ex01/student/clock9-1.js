"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Coding Challenge 1

   Clock
   Author: Jackson Baker
   Date:   11/5/2026

   function getWeekday(dayNum)
      Returns the text of the day of the week where dayNum
      is the number of the week from 0 (Sunday) to 6 (Saturday)
*/


function getWeekday(dayNum) {
   var wDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   return wDays[dayNum];
}

function runClock() {
   let thisDay = new Date();

   let thisDate = thisDay.toLocaleDateString();

   let thisDayNum = thisDay.getDay();

   let thisWeekday = getweekday(thisDayNum);

   let thisTime = thisDay.toLocaleTimeString();

   document.getElementById("date").textContent = thisDate;
   document.getElementById("wday").textContent = thisWeekday;
   document.getElementById("time").textContent = thisTime;
}