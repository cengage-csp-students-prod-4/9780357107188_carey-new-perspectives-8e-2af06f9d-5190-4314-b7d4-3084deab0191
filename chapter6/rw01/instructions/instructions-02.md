# Document Setup

Open the *dlr_mornings.html*, *dlr_tables2.css* and *dlr_columns2.css* files and enter your **name** and the **date** in the comment section of each file. Next, go to the *dlr_mornings.html* file and insert links to the *dlr_tables2.css* and *dlr_columns2.css* style sheets. 

# Create the Web Table

Scroll down the file and directly below the paragraph element, insert a web table and do the following:
* Set the class name of the web table to `programs`.
* Add a table caption containing the text **All Times Central**.
* insert a `colgroup` element containing three columns below the caption. 
    * set the first `col` element should have the class name `timeColumn`.
    * set the second `col` element should have the class name `wDayColumns` and span five columns in the table that will contain the weekday programs.
    * set the last `col` element should have the class name `wEndColumns` and span the last two columns containing the weekend programming.
*  Add the `thead` row group element containing a single table row with `th` elements containing the text shown in *Figure 6–52*. 
* Add the `tbody` row group element containing the times and names of the different DLR programs from 5:00 a.m. to 12:00 p.m., Monday through Sunday, in half-hour intervals. The times should be placed in `th` elements and the program names in `td` elements. 
* Create row and column spanning cells to match the layout of the days and times shown in *Figure 6–52*.
* Add the `tfoot` row group element containing a single row with a single `td` element that spans 8 columns and contains the text **Support your Public Radio Station**. 


