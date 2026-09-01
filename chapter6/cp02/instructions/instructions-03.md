# Mobile Styles

Open _lht_tables.css_ file and within the "Mobile Styles" section, insert a media query for screen devices with a maximum `width` of **640** pixels. You want mobile devices to display the calendar information in two columns. To create this layout, add the style rules that:

1. displays `table`, `tbody`, `tr`, `td`, `th`, and `caption` elements as blocks,
2. does not display the `thead` `h1` element, and
3. displays the `table caption` in **white** on a **medium gray** (**rgb(51, 51, 51)**) background with a font size of **1.5em** and a line `height` of **2em**.

Create a style rule for every data cell that:

1. adds a **1** pixel **dotted gray** border,
2. changes the text color to **rgb(11, 12, 145)**,
3. places the cell using relative positioning,
4. sets the left padding to **40%**, and
5. sets the minimum `height` to **40** pixels.

Create a style rule that uses the `nth-of-type` pseudo-class to display every odd-numbered table row with a background color of **rgb(255, 235, 178)** and a **2** pixel **solid gray** border.

Create a style rule that inserts the text of the `data-date` attribute before every data cell. Place the attribute text using absolute positioning at the coordinates **(0, 0)** with a `width` of **40%** and padding space of **5** pixels.

# Tablet and Desktop Styles

Next, you design the layout of the calendar for tablet and desktop devices. Go to the "Tablet and Desktop Styles" section and insert a media query for screen devices with a minimum `width` of **641** pixels. Next, create a style rule for the `table` element that:

1. displays the background image _lht_photo1.png_ with no tiling in the bottom-right corner of the table with a `width` of **40%**,
2. adds a **6** pixel double border with color value **rgb(154, 64, 3)**,
3. collapses the table borders,
4. centers the table by setting the top/bottom margins to **20** pixels and the left/right margins to **auto**,
5. uses a fixed layout for the table content, and
6. sets the `width` of the table to **85%**.

For every heading and data cell, create a style rule that:

1. adds a **1** pixel **solid gray** border,
2. sets the font size to **0.85em** and with normal weight,
3. adds a **5** pixel padding space,
4. aligns the cell text with the top of the cell,
5. sets the `width` to **14.28%**, and
6. allows the browser to wrap cell text within individual words.
   > Use the `word-wrap` property.

For every data cell, create a style rule that:

1. applies a semi-transparent background color with the value **rgba(171, 171, 171, 0.6)** and
2. sets the text color to **rgb(11, 12, 145)**.
