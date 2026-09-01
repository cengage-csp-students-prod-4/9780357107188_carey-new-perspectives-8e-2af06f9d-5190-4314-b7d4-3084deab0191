Open the _clockface9-3.js_ file and below the initial comment section insert the `moveHands()` function that moves the three hands of the analog clock. Add the following to the function:

1. Create a variable named `nowTime` that contains the current date and time.
2. Create the `nowSeconds`, `nowMinutes`, and `nowHours` variables containing the seconds, minutes, and hours values from the `nowTime` variable.
3. Calculate the angle that the second hand makes on the clock face by multiplying the `nowSeconds` value by **6**. Store the result in the `secondsAngle` variable.
4. Determine the angle that the minute hand makes on the clock face by calculating the following expression: `(nowMinutes + nowSeconds/60)*6`. Store the calculated value in the `minutesAngle` variable.
5. Determine the angle that the hour hand makes on the clock face by calculating the following expression: `(nowHours + nowSeconds/3600 + nowMinutes/60)*30`. Store the calculated value in the `hoursAngle` variable.
6. Call the `rotateHand()` function using `secondsAngle` and **seconds** as the argument value to rotate the image of the second hand. Call the `rotateHand()` function again using the `minutesAngle` and **minutes** as the argument values. Call the `rotateHand()` function one last time using the `hoursAngle` and **hours** as the argument values.
