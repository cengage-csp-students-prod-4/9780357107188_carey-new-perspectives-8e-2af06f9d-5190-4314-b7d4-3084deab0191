# Create the Payment Form Continued...

Set the default value of the country field to **United States**.

Create a field set with the ID `creditCard`, which you use to insert credit card fields. Add the legend **Credit Card (required)**.

Within the `creditCard` field set, insert another field set containing four `label` elements, with each `label` element belonging to the `cardLabel` class. Within each of the four `label` elements, insert an option button from the `cCard` field with the value **amex**, **discover**, **master**, and **visa**. Make `cCard` a required field. Follow each option button with an image element containing the image of its corresponding credit card image using the _sb_amex.png_, _sb_discover.png_, _sb_master.png_, and _sb_visa.png_ files.

After the `creditCard` field set, insert a `label` containing the text **Credit Card Number** associated with the `cardBox` input control. Create an `input` text box with the ID `cardBox` for the `cardNumber` field. Make the field `cardNumber` required and have the field value follow the regular expression pattern for credit card numbers (using the regular expression in the _sb_regex.txt_ file). Create the **Expiration Date** `label` associated with the `monthList` control. Add a selection list with the ID `monthList` for the `cardMonth` field. Make the `cardMonth` field required. Populate the selection list with the option text **--Month--**, **January (01)**, **February (02)** and so forth up to **December (12)**. For the **--Month--**, set the field value to an empty text string. For the month options, insert the month value from **01** up to **12**.

Add a selection list with the ID `yearList` for the `cardYear` field. Make the `cardYear` field required. Populate the selection list with the option text **--Year--**, **2020**, **2021**, **2022**, **2023**, and **2024**. For the **--Year--**, set the field value to an empty text string and, for the year options, insert the 4-digit year value.

Create a `label` with the text **CSC** associated with the `cscBox`. Add a text input box with the ID `cscBox` for the required `csc` field. Have the `csc` field value follow the regular expression pattern `^\d{3}$`. Set the maximum length of the field value to **3** characters and display the placeholder text **nnn**.

After the `creditCard` field set, insert a `button` element of the submit type. Within the button, insert the _sb_button.png_ inline image with the alternate text **next**.

> The text for the `button` is part of the button image, so the value attribute is not needed.
