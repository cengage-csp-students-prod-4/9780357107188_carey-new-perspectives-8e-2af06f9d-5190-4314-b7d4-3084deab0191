"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Coding Challenge 3

   Clock Face
   Author: Jackson Baker
   Date:   11/9/2026


*/

function moveHands() {
   var nowTime = new Date();


var nowSeconds = nowTime.getSeconds();
var nowMinutes = nowTime.getMinutes();
var nowHours = nowTime.getHours();

var secondsAngle = nowSeconds * 6;

var minutesAngle = nowMinutes + nowSeconds / 60 * 6;

var hoursAngle = nowHours + nowMinutes / 60 + nowSeconds / 3600 * 30;

rotateHand(secondsAngle, "seconds");
rotateHand(minutesAngle, "minutes");
rotateHand(hoursAngle, "hours");
}

/* ------------------------------------------------

   The rotateHand() using the transform style to rotate the hand
   image by a specified angle
*/

function rotateHand(angle, hand) {
   document.getElementById(hand).style.transform = "rotate(" + angle + "deg)";
}
