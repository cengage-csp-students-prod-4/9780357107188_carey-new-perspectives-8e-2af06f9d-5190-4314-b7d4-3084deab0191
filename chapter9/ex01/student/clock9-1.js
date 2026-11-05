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
   var thisDay = new Date();

   var thisDate = thisDay.toLocaleDateString();

   var thisDayNum = thisDay.getDay();

   var thisWeekday = getweekday(thisDayNum);

   var thisTime = thisDay.toLocaleTimeString();

   document.getElementById("date").textContent = thisDate;
   document.getElementById("wday").textContent = thisWeekday;
   document.getElementById("time").textContent = thisTime;
}