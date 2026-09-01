# Format Mobile Hyperlinks

Sofia has placed hypertext links for the gallery’s phone number and e-mail address in a paragraph with the ID `links`. For mobile users, she wants these two hypertext links spaced evenly within the paragraph that is displayed below the top navigation list. To format these links, create a style rule that displays the element referenced by the `p#links` selector as a flexbox row with no wrapping, then add a style that sets the value of the `justify-content` property to `space-around`. She wants the telephone and e-mail links to be prominently displayed on mobile devices. For each `p#links` a selector, apply the following style rule that:
1. displays the link text in **white** on the background color **rgb(220, 27, 27)**,
2. sets the border radius around each hypertext to **20** pixels with **10** pixels of padding, and
3. removes any underlining from the hypertext links. 

# Tablet and Desktop Layouts 

Next, you’ll define the layout for tablet and desktop devices. Create a media query for screen devices whose `width` is **481** pixels or greater. Within this media query, display the `body` element as a flexbox in row orientation with wrapping. The page `body` has four children: the `header`, the `footer`, the `article` element, and the `aside` element. The `article` and `aside` elements will share a row with more space given to the `article` element. Set the flex growth, shrink, and basis values of the `article` element to **2**, **1**, and **400** pixels. Set those same flex values for the `aside` element to **1**, **2**, and **200** pixels.

For tablet and desktop devices, the top navigation list should be displayed as a horizontal row with no wrapping. Enter a style rule for the `nav#top ul` selector to display that element as a flexbox with a background color of **rgb(51, 51, 51)** and a `height` of **50** pixels. Use the `justify-content` and `align-items` property to center the flex items within that flexbox both horizontally and vertically. 

For the `nav#top ul li` selector, create a style rule for those list items, setting the flex growth rate to **0**, the flex shrink rate to **1**, and the basis value to **80** pixels. 

Sofia doesn’t want the `links` paragraph displayed for tablet and desktop devices. Complete the media query for tablet and desktop devices by creating a style rule for the `p#links` selector to hide the paragraph.

Verify that the layout and contents of the page switch between the mobile version and the tablet/desktop version shown in *Figure 5–64* as the screen width is increased and decreased.
