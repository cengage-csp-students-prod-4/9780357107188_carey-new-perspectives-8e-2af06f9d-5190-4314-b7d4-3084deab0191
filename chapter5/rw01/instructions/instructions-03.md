# General Flex Styles

Go to the "General Flex Styles" section. Within this section, you’ll create a flexible layout that varies in response to changing screen widths.

In the "General Flex Styles" section create a style rule for the `body` element that:
* displays the page `body` as a `flexbox` flowing in the row direction, and
* wraps content to a new line as needed.

The page content is divided into two section elements with IDs of `left` and `right`. The `left` section does not need as much of the screen width. Create a style rule for the `left` section that:
* sets its flex growth and shrink rates to **1** and **8** respectively, and
* sets its flex basis size to **130** pixels. 

The `right` section requires more screen width. Create a style rule for the `right` section that:
* sets its flex growth and shrink values to **8** and **1**, and 
* sets its flex basis size to **351** pixels. 

Next, set the `display` of the `section` element with class ID of `tips` as a `flexbox`. Have the content of the flexbox flow in the row direction with row wrapping enabled.

Create a style rule for the `article` element that:
* lays it out with a flex growth value of **2**,
* sets the flex shrink value of **1**, and
* sets a flex basis size of **351** pixels. 

The biographical asides within each tips section need to occupy less screen space. Create a style rule for the `aside` element that:
* lays it out with a flex growth value of **1**,
* sets the flex shrink value of **2**, and
* sets a flex basis size of **250** pixels. 

Finally, the horizontal navigation list at the top of the page will also be treated as a `flexbox`. Create a style rule for the `nav.horizontal ul` selector that displays it as a `flexbox` in column orientation with wrapping.

# Mobile Devices

Go to the "Mobile Devices" section and create a media query for screen devices with a maximum width of **480** pixels.

For mobile devices, the vertical list of links to archived parenting tips should be displayed in several columns at the bottom of the page. Within the media query you created in the last step, add the following style rules:
1. For the `nav.vertical ul` selector, create a style rule that displays it as a `flexbox` in column orientation with wrapping. Set the `height` of the element to **240** pixels.
2. To give the `section` element with an ID of `left` a flex order value of **99** to place it near the bottom of the page.
3. To give the `body > footer` selector an order value of **100** to put it at the page bottom. 

Marjorie wants to hide the navigation list at the top of the page when viewed on a mobile device unless the user hovers (or taps) a navicon. Using the technique shown in this tutorial, add the following style rules to set the behavior of the navicon within the media query for mobile devices:
1. Display the navicon by creating a style rule for the `a#navicon` selector to display it as a block.
2. Set the display property of the `nav.horizontal ul` selector to **none**.
3. Display the navigation list contents in response to a hover or touch by creating a style rule for the `a#navicon:hover+ul`, `nav.horizontal ul:hover` selector that sets its display value to **block**.

