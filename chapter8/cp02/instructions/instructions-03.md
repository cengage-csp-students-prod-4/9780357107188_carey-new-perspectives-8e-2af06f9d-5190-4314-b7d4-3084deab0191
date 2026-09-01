# Create the `gameLinks` Transition Effects

Heather wants a transition effect applied to the links in the `gameLinks` list in which a gradient-colored bar gradually expands under each link during the hover event. To create this effect, you will use the `::after` pseudo-element and the content property to insert the bar. Create a style rule for the `nav#gameLinks a::after` selector that:

1. places an empty text string as the value of the content property,
2. places the content with absolute positioning with a top value of **100%** and a left value of **0** pixels,
3. sets the `width` to **0%** and the `height` to **8** pixels,
4. changes the background to a linear gradient that moves to right from the color value **rgb(237, 243, 71)** to **rgb(188, 74, 0)**,
5. sets the border radius to **4** pixels, and
6. hides the bar by setting the opacity to **0**.

When the links are hovered over, change the appearance of the bar by adding a style rule for the `nav#gameLinks a:hover::after` selector that changes the opacity to **1** and the `width` to **100%**.

Return to the style rule for the `nav#gameLinks a::after` selector and add a transition style that applies the opacity and width changes over a **0.5** second interval.

To create animated cartoons, Heather has stored frames of the images in the _paa_bat.png_, _paa_bfly.png_, and _paa_fox.png_ image files. View these files to see the different frames to be displayed in the animation.

# Sprite Styles

Return to the _paa_animate.css_ file and, within the "Sprite Styles" section, create a style rule that displays all `div` elements of the `sprite` class with absolute positioning.

For the `div` element with the ID `bat`, create a style rule that:

1. sets the `width` and `height` to **40** pixels by **50** pixels,
2. sets the top and left coordinates to **100** pixels and **–50** pixels, and
3. displays the _paa_bat.png_ as the background image placed at the left center of the background with no tiling and sized to cover the background.

Create a similar style rule for the `div` element with the ID `butterfly`, setting the `width` and `height` at **35** pixels, the top-left coordinates at **60** pixels and **–50** pixels, and using the _paa_bfly.png_ as the background image. Create another style rule for the `div` element with the ID `fox`, setting the `width` and `height` at **280** and **260** pixels, the bottom and right coordinates at **10** pixels, and the _paa_fox.png_ file as the background image.

> The background image in all aminations should place the image at the left center with no tiling and sized to cover the background.

Sprites are animated by moving the background image file across the background of the object. Go to the Animation Styles section and create an animation named `playSprite` that sets the background image position to right center at **100%** time.
