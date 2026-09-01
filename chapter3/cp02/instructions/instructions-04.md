# Map Styles

Next, you will lay out the interactive map. The interactive map is placed within a `div` element with the ID `battleMap`. Go to the "Map Styles" section and create a style rule for this element that sets its `width` to **688** pixels. Center the map by setting its top/bottom margins to **20** pixels and its left/right margins to **auto**. Place the map using relative positioning. The actual map image is placed within an `img` element with the ID `mapImage`. Create a style rule for this element that displays it as a block with a `width` of **100%**.

# Interactive Map Styles

 Go to the "Interactive Map Styles" section. Within this section, you’ll create style rules that position each of the six map markers onto the battle map. The markers are placed within hypertext links. Create a style rule for every a element of the `battleMarkers` class that places the hypertext link using absolute positioning. Create style rules for the six a elements with IDs ranging from `marker1` to `marker6`, placing them at the following (top, left) coordinates:
 1. `marker1` **(220, 340)**,
 2. `marker2` **(194, 358)**,
 3. `marker3` **(202, 400)**,
 4. `marker4` **(217, 452)**,
 5. `marker5` **(229, 498)**,
 6. `marker6` **(246, 544)**.


# Map Information Styles
The information associated with each map marker has been placed in `div` elements belonging to the `mapInfo` class. Go to the "Map Information Styles" section and create a style rule that hides this class of elements so that this information is not initially visible on the page.

To display the information associated with each map maker, you need to create a style rule that changes the map information’s display property in response to the mouse pointer hovering over the corresponding map marker. Since the map information follows the map marker in the HTML file, use the following selector to select the map information corresponding to the hovered map marker: `a.battleMarkers:hover + div.mapInfo`. Write a style rule for this selector that sets its display property to block.

Test the interactive map by first verifying that none of the information about the six battle locations appears on the page unless you hover your mouse pointer over the marker on the battle map. Further verify that when you are not hovering over the battle marker, the information is once again not visible on the page.
