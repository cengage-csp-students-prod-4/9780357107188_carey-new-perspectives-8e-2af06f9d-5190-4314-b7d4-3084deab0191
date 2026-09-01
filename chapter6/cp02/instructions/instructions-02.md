# Document Setup

Open the _lht_sept.html_, _lht_tables.css_, and _lht_columns.css_ files and enter your **name** and the **date** in the comment section of each file. Next, go to the _lht_sept.html_ file and add links to the _lht_tables.css_ and _lht_columns.css_ files to the document `head`.

# Creating the Calendar

Directly below the `article` element, insert a web table using the ID `calendar`. Add a caption with the text **September 2021 Calendar**. Also add a column group containing two `col` elements. Give the first `col` element the class name `weekdays` and have it span five columns. Give the second `col` element the class name `weekends` and have it span 2 columns.

Add the table header row group with a single row with seven heading cells containing the three letter day abbreviations **Sun** through **Sat**. Add the table body row group with five rows and seven data cells within each row. Within each table cell, add the following code to create an `h1` heading and description list:

```html
<h1>day</h1>
<dl>
  <dt>event</dt>
  <dd>time</dd>
  <dd>price</dd>
</dl>
```

where `day` is the day of the month, `event` is the name of an event occurring on that day, `time` is the time of the event, and `price` is the admission price, using the days, events, times, and prices shown in the _lht_schedule.txt_ file. If there is no event scheduled for the day, insert only the code for the `h1` heading. Start your calendar with _August 29_ and conclude it with _October 2_.

For each data cell you create in the table body, add an attribute in the opening `td` tab named `data-date` containing the date associated with the cell. For example, in the first table cell, enter `data-date` value **Sun, Aug 29, 2021**, the second cell will have the `data-date` value **Mon, Aug 30, 2021** and so forth.

> This code will be used to display the date information in the mobile layout.
