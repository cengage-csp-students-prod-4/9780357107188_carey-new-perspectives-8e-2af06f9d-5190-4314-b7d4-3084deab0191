# Document Setup

Open the _tny_july.html_ and _tny_timer.js_ files and enter your **name** and the **date** in the comment section of each file. Next, go to the _tny_july.html_ file and directly above the closing `</head>` tag, insert a `script` element that links to the _tny_timer.js_ file. Defer the loading of the script file until the web page loads. Take some time to study the content and structure of the file, paying close attention to the id attributes applied to different page elements.

# Complete the `showClock()` Function

Go to the _tny_timer.js_ file and at the top of the file, insert a statement to tell the browser to apply strict usage of the JavaScript code in the file. Directly above the `nextJuly4()` function, insert a function named `showClock()` that has no parameters. Within the `showClock()` function, complete _steps 1_ through _7_ listed below:

1. Declare a variable named `thisDay` that stores a `Date` object containing the date **May 19, 2021** at **9:31:27 a.m.**
2. Declare a variable named `localDate` that contains the text of the date from the `thisDay` variable using local conventions. Declare another variable named `localTime` that contains the text of the time stored in the `thisDay` variable using local conventions.
3. Within the inner HTML of the page element with the ID `currentTime`, write the following code `<span>date</span><span>time</span>` where `date` and `time` are the values of the `localDate` and `localTime` variables.
4. Hector has supplied you with a function named `nextJuly4()` that returns the date of the next 4th of July. Call the `nextJuly4()` function using `thisDay` as the parameter value and store the date returned by the function in the `j4Date` variable.
5. The countdown clock should count down to **9 p.m.** on the **4th of July**. Apply the `setHours()` method to the `j4Date` variable to change the hours value to **9 p.m.**

> Express the value for 9 p.m. in 24-hour time.

6. Create variables named `days`, `hrs`, `mins`, and `secs` containing the days, hours, minutes, and seconds until **9 p.m.** on the next **4th of July**.
7. Change the text content of the elements with the IDs `dLeft`, `hLeft`, `mLeft`, and `sLeft` to the values of the `days`, `hrs`, `mins`, and `secs` variables rounded down to the next lowest integer.
