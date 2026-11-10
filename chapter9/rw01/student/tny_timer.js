use strict

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Jackson Baker
   Date:   11/10/2026

*/

/* added a command to show the clock on the website */

showClock();

setInterval(showClock, 1000);



function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2021");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}

function showClock() {
   var thisDay = new Date();

   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();

   document.getElementById("currentTime"). innerHTML = "<span>" + localDate + "</span><span>" + localTime + "</span>";

   var j4Date = nextJuly49(thisDay);

   j4Date.setHours(21);

   var timeDiff = j4Date - thisDay;

   var days = timeDiff / (1000 * 60 * 60 * 24);
   var hrs = (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
   var mins = (timeDiff % (1000 * 60 * 60 *)) / (1000 * 60);
   var secs = (timeDiff % (1000 * 60)) / 1000;

   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);
}