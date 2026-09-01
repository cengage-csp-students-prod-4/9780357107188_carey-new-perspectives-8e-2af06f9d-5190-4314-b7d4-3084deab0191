# Create the Form Continued...

Next within the web form, create a field set with the ID `pickupInfo` containing the following information for pickup orders:
1. A legend containing the text **Pickup Options**.
2. A label containing the text **Pickup Time** (leave blank for earliest pickup) associated with the `pickupBox` control.
3. Add an `input` element with the ID `pickupBox` and field name `pickupTime` for storing time values. Add the `disabled` attribute to the tag to disable this control when the form is initially opened. Use a data type of `time` for the control.

Finally, within the form, add a `div` element containing a submit button displaying the text **Begin Building your Order**.

# Validation Styles
Open the *rb_validate.css* file and add validation styles for the web form. Within the "Validation Styles" section, add the following style rules:
1. A rule that displays `input`, `select`, and `textarea` elements that have the focus with a background color of **rgb(255, 255, 180)**.
2. A rule that displays the `nameBox` and `phoneBox` controls that have the focus and contain valid data with a background color of **rgb(220, 255, 220)** and the background image file *rb_okay.png* at the right with no tiling contained within the background.
3. A rule that displays the `nameBox` and `phoneBox` controls that have the focus and invalid data with a background color of **rgb(255, 230, 230)** and the background image file *rb_warning.png* at the right with no tiling contained within the background.

