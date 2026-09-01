# Calculate the `totalVotes`

Next, go to the _vw_results.js_ file and declare a variable named `reportHTML` containing the following HTML text: `<h1>title</h1>`
where **title** is the value of the `raceTitle` variable stored in the _vw_congminn.js_ file

Create a `for` loop that loops through the contents of the `race` array using `i` as the counter variable. Place the commands specified in _steps 1_ through _5_ within this program for loop:

1. Create a variable named `totalVotes` that will store the total votes cast in each race. Set its initial value to **0**.
2. Calculate the total votes cast in the current race by applying the `forEach()` method to `i`th index of the `votes` array using the `calcSum()` function as the callback function.
3. Add the following HTML text to the value of the `reportHTML` variable to write the name of the current race in the program loop:

```html
<table>
  <caption>
    race
  </caption>
  <tr>
    <th>Candidate</th>
    <th>Votes</th>
  </tr>
</table>
```

where **race** is the `i`th index of the `race` array. 4. Call the `candidateRows()` function (you will create this function shortly) using the counter variable `i` and the `totalVotes` variable as parameter values. Add the value returned by this function to the value of the `reportHTML` variable. 5. Add the text `</table>` to the value of the `reportHTML` variable.

After the `for` loop has completed, write the value of the `reportHTML` variable into the innerHTML of the first (and only) `section` element in the document.

# Create the `candidateRows()` function

Next, create the `candidateRows()` function. The purpose of this function is to write individual table rows for each candidate, showing the candidate’s name, party affiliation, vote total,and vote percentage. The `candidateRows()` function has two parameters named `raceNum` and `totalVotes`. Place the commands in _steps 1_ through _3_ within this function:

1. Declare a local variable named `rowHTML` that will contain the HTML code for the table row. Set the initial value of this variable to an empty text string.
2. Create a `for` loop in which the counter variable `j` goes from **0** to **2** in steps of **1** unit. Within the `for` loop do the following:
   - Declare a variable named `candidateName` that retrieves the name of the current candidate and the current race.
   > Retrieve the candidate name from the multidimensional candidate array using the reference, `candidate[raceNum][j]`.
   - Declare a variable named `candidateParty` that retrieves the party affiliation of the current candidate in the current race from the multidimensional party array.
   - Declare a variable named `candidateVotes` that retrieves the votes cast for the current candidate in the current race from the multidimensional votes array.
   - Declare a variable named `candidatePercent` equal to the value returned by the `calcPercent()` function, calculating the percentage of votes received by the current candidate in the loop. Use `candidateVotes` as the first parameter value and `totalVotes` as the second parameter value.
   - Add the following HTML code to the value of the rowHTML variable:
   ```html
   <tr>
     <td>name (party)</td>
     <td>votes (percent)</td>
   </tr>
   ```
   where **name** is the value of `candidateName`, **party** is the value of `candidateParty`, **votes** is the value of `candidateVotes`, and **percent** is the value of `candidatePercent`. Apply the `toLocaleString()` method to `votes` in order to display the vote total with a thousands separator. Apply the `toFixed(1)` method to `percent` in order to display percentage values to **1** decimal place.
3. Return the value of the `rowHTML` variable.

Open the website in the browser preview. Verify that the three candidate names, party affiliations, votes, and vote percentages are shown for each of the eight congressional races.
