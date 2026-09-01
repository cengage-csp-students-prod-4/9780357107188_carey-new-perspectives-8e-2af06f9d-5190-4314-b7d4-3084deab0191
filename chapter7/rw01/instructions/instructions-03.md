# Create the Form Continued...

Create a second `div` element in the web form that encloses a label with the text **Phone\*** associated with the `phoneBox` control. Within the `div` element, add an input box with the ID `phoneBox`, field name `custPhone`, and placeholder text **(nnn) nnn-nnnn**. Make `custPhone` a required field and have any text entry follow the regular expression pattern: `^\d{10}$|^(\(\d{3}\)\s*)?\d{3}[\s-]?\d{4}$`.

> You can copy the regular expression code from the _rb_regex2.txt_.

Add another `div` element to the web form containing the following code:

1. Insert an `input` element to create an option button for the `orderType` field with the ID `delivery`. Make the option button checked by default. After the option button, insert a `label` associated with the `delivery` control containing the text **Delivery**.
2. Add an `input` element to create a second option button for the `orderType` field with the ID `pickup`, followed by a `label` associated with the pickup control containing the text **Pickup**.

Next within the form, create a field set with the ID `deliveryInfo`. Within this field set, add the following:

1. A legend containing the text **Delivery Options**.
2. A text area box with the ID `addressBox` and field name of `delAddress` containing the placeholder text **Enter delivery address**.
3. A `label` containing the text **Delivery Time** (leave blank for earliest delivery) associated with the `delBox` control.
4. Add an `input` element with the ID `delBox` and field name `delTime` for storing delivery time values. Use a data type of `time` for the control.
