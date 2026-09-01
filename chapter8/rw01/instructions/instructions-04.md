# Transition Styles

 Maxine wants to create a transition for the links at the top of the page that enlarges the link text and moves it out and above its default position. Return to the *cp_animate2.css* file and go to the "Transition Styles" section and create a style rule for the `nav#topLinks` a selector that:
 1. sets the text color to **rgb(255, 255, 255)**,
 2. adds a text shadow with the color **rgba(0, 0, 0, 1)**, a horizontal offset of **1** pixel, a vertical offset of **–1** pixel, and a blur of **1** pixel, and
 3. uses the transform style to apply the functions **scale(1,1)** and **translateY(0px)**.

 Within the style rule you created above, add a transition that applies to all of the properties of the selected element over an interval of **1.2** seconds using linear timing.

Create a style rule for the `nav#topLinks a:hover` selector that:
1. sets the text color to **rgb(255, 183, 25)**,
2. sets the text shadow to the color **rgba(0, 0, 0, 0.5)** with a horizontal offset of **0** pixels, a vertical offset of **15** pixels, and a blur of **4** pixels, and
3. uses the transform style with **scale(2,2)** and **translateY(-15px)** to double the scale of the object and translate it **–15** pixels in the vertical direction.

 Reload *cp_astaire.html* in the browser preview. Hover your mouse pointer over the links at the top of the page and verify that your browser applies a transition over a **1.2** second duration as each link increases in size and appears to move upward and outward from the page in response to the hover event. 