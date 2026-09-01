# Document Setup

Open the *cw_home.html* and *cw_styles.css* files and enter your **name** and the **date** in the comment section of each file. Next, go to the *cw_home.html* file and within the document `head`, insert a `meta` element that sets the browser `viewport` for use with mobile devices. Also, create links to *cw_reset.css* and *cw_styles.css* style sheets. Take some time to study the contents and structure of the document and then close the file. Return to the *cw_styles.css* file and at the top of the file, use the `@import` rule to import the contents of the *cw_designs.css* file, which contains several style rules that format the appearance of different page elements. 

# Home Page Styles

At the bottom of the home page is a navigation list with the ID `bottom` containing several `ul` elements. Sofia wants these `ul` elements laid out side-by-side. Create a style rule for the `nav#bottom` selector displaying its element as a flexbox row with no wrapping. Set the `justify-content` property so that the flex items are centered along the main axis. For the `nav#bottom ul` selector, create a style rule to set the flex growth rate to **0**, the shrink rate to **1**, and the basis value to **150** pixels.

Sofia wants more highly contrasting colors when the page is displayed in a mobile device. Create a media query for mobile screen devices with maximum widths of **480** pixels. Within that media query, insert a style rule that sets the font color of the `body` element to **rgb(211, 211, 211)** and sets the `body` background color to **rgb(51, 51, 51)**. 

Sofia also wants to reduce the clutter in the mobile version of the home page. Hide the following elements for mobile users: the `aside` element, any `img` element within the `article` element, and the spotlight `section` element. 

At the top of the web page is a navigation list with the ID `top`. For mobile devices, create a style rule for the `nav#top ul` selector, displaying the element as a flexbox row with wrapping. For each list item within the `nav#top ul` selector, set the font size to **2.2em**. Size the list items by setting their flex values to **1** for the growth and shrink rates and **130** pixels for the basis value. 

Under the mobile layout, the six list items in the top navigation list should appear as square blocks with different background images. Using the selector `nav#top ul li:nth-of-type(1)` for the first list item, create a style rule that changes the background to the background image *cw_image01.png*. Center the background image with no tiling and size it so that the entire image is contained within the background.

Repeat the previous step for the next five list items using the same general format. Use the  *cw_image02.png* file for background of the second list item, the *cw_image03.png* file for the third list item background, and so forth up through the `nav#top ul li:nth-of-type(6)` selector. 