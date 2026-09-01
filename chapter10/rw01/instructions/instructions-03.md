# Complete the JavaScript File

Open the _lht_table.js_ file and below the comment section, declare a variable named `thisDay` containing the date _October 1, 2021_. You will use this date to test your script. Create a variable named `tableHTML` that will contain the HTML code of the events table. Add the text of the following HTML code to the initial value of the variable:

```html
<table id="eventTable">
  <caption>
    Upcoming Events
  </caption>
  <tr>
    <th>Date</th>
    <th>Event</th>
    <th>Price</th>
  </tr>
</table>
```

Lewis only wants the page to list events occurring within 14 days after the current date. Declare a variable named `endDate` that contains a `Date` object that is 14 days after the date stored in the `thisDay` variable.

> Use the `new Date()` object constructor and insert a time value that is equal to `thisDay.getTime() + 14*24*60*60*1000`.

Create a `for` loop that loops through the length of the `eventDates` array. Use `i` as the counter variable.

# Complete the `for` Loop logic

Within the `for` loop insert the following commands in a command block:

1. Declare a variable named `eventDate` containing a `Date` object with the date stored in the `i`th entry in the `eventDates` array.
2. Declare a variable named `eventDay` that stores the text of the `eventDate` date using the `toDateString()` method.
3. Declare a variable named `eventTime` that stores the text of the `eventDate` time using the `toLocaleTimeString()` method.
4. Insert an `if` statement that has a conditional expression that tests whether `thisDay` ≤ eventDate`and`eventDate ≤ endDate`. If so, the event falls within the two-week window that Lewis has requested and the script should add the following HTML code text to the value of the tableHTML variable.

```html
<tr>
  <td>eventDay @ eventTime</td>
  <td>description</td>
  <td>price</td>
</tr>
```

where **eventDay** is the value of the `eventDay` variable, **eventTime** is the value of the `eventTime` variable, **description** is the `i`th entry in the `eventDescriptions` array, and **price** is the `i`th entry in the `eventPrices` array.

After the `for` loop, add the text of the HTML code `</table>` to the value of the `tableHTML` variable. Insert the value of the `tableHTML` variable into the inner HTML of the page element with the ID `eventList`.

Document your code in the script file using appropriate comments. Open the website in the browser preview. Verify that the page shows theater events over a two-week period starting with Friday, October 1, 2021 and concluding with Thursday, October 14, 2021.
