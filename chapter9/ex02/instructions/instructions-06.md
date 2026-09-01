Create the `stopCountdown()` function to the stop the countdown when **0** is reached. Add the following commands to the function:

1. Change the text content of the document with the ID **Alert** to the text string **Time’s Up**.
2. Use the `clearInterval()` method to the clear the repeating command with the **timeID** variable `clockID`.

Go back to the top of the file and directly after the command to declare the `secsLeft` variable insert a command using the `setInterval()` method to run the `countdown()` function every second. Store the time ID associated with the repeating command in the `clockID` variable
