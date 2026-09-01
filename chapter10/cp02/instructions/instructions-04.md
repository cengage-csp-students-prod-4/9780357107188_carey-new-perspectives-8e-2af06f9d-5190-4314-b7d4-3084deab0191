# Use Bar Charts to Display the Voting Data

 Pam also wants the report to display the vote percentages as bar charts with the length of the bar corresponding to the percentage value. Return to the *vw_results.js* file and at the bottom of the file, create a function named `createBar()` with one parameter named `partyType`. Add the commands described in *steps 1* through *2* to the function:
 1. Declare a variable named `barHTML` and set its initial value to an empty text string.
 2. Create a switch/case statement that tests the value of the `partyType` parameter. 
 If `partyType` equal **D** set `barHTML` equal to:
 ```html
 <td class='dem'></td>
 ```
 If **partyType** equals **R** set `barHTML` equal to:
 ```html
<td class='rep'></td>
```
Finally, if `partyType` equals **I** set barHTML to:
```html
<td class='ind'></td>
```

Return the value of `barHTML`. Next, add these empty data cells to the race results table, with one cell for every percentage point cast for the candidate.

Scroll up to the `candidateRows()` function. Directly before the line that adds the HTML code `</tr>` to the value of the `rowHTML` variable, insert a `for` loop with a counter variable `k` that goes from **0** up to a value less than `candidatePercent` in increments of **1** unit. Each time through the loop call the `createBar()` function using `candidateParty` and `candidatePercent` as the parameter values.

Add comments throughout the file with descriptive information about the variables and functions. Reload *vw_election.html* in your browser. Verify that each election table shows a bar chart with different the length of bars representing each candidate’s vote percentage.
