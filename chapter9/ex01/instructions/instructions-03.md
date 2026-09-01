Open to the _clock9-1.js_ file and directly below the initial comment section, insert the `runClock()` function. Within the function do the following:

1. Declare the `thisDay` variable containing the current date using the `new Date()` command.
2. Create the `thisDate` variable containing the text string of the current date by applying the `toLocaleDateString()` method to the `thisDay` variable.
3. Create the `thisDayNum` variable to store the number of the current weekday by applying the `getDay()` method to the `thisDay` variable.
4. Create the `thisWeekday` variable by storing the value returned by the `getWeekday()` function using `thisDayNum` as the function value.
5. Create the `thisTime` variable containing the text string of the current date by applying the `toLocaleTimeString()` method to the `thisDay` variable.
6. Using the `textContent` property, change the text stored in the document element with the ID **date** to the value of the `thisDate` variable, the text stored in the document with element with **wday** ID to the value of the `thisWeekday` variable, and the text stored in the document element with the ID **time** to the value of the `thisTime` variable.
