The list of Fred Astaire’s films has been stored within a table nested within a `div` element with the ID `Marquee`. The table is long and Maxine wants to only display a portion of it at a time, allowing the contents of the table to automatically scroll upward as in a theater marquee. To create this animated effect, you change the top position style of the table over a specified time interval, moving the table upward through the marquee.

# Marquee Styles

Return to the _cp_animate2.css_ file and go to the "Marquee Styles" section and insert a style rule that places the marquee `div` element with relative positioning. Add a style rule for the `table` nested within the marquee `div` element that places the `table` using absolute positioning. Do not specify any coordinates for either element.

# Keyframe Styles

Go to the "Keyframe Styles" section and create an animation named scroll with the following two key frames:

1. at **0%**, set the value of the top property to **250px** and,
2. at **100%**, set the value of the top property to **–1300px**.

# Animation Styles

Go to the "Animation Styles" section and apply the scroll animation to the table within the marquee `div` element over a duration of **50** seconds using linear timing within infinite looping. Maxine wants the marquee to stop scrolling whenever the user hovers the mouse pointer over it. Add a style rule for the `div#marquee:hover table` selector that pauses the animation during the hover event.

Reload the _cp_astaire.html_ file in the browser preview. Verify that the marquee listing the Fred Astaire films starts scrolling automatically when the page loads, goes back to the beginning after the last film is listed, and stops whenever the user hovers the mouse pointer over the marquee.

> On touchscreen devices, tap the marquee to initiate the hover event and pause the scrolling text, and then tap elsewhere on the page to remove the hover and restart the marquee.
