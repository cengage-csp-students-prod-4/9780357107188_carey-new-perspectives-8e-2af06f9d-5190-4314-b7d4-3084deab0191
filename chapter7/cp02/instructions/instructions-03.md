# Create the Payment Form

Next, insert a payment form. Directly below the **Payment Form** `h1` header, insert a `form` element that employs action at `http://www.example.com/sb/payment` via the `post` method. Assign the web form the id `payment`.

Insert a field set with the id `billing` to the payment form. Add the legend **Billing Information (required)** to the field set.

Within the billing field set, add the labels and input boxes specified in *Figure 7–68*. Note that none of the input boxes contain placeholder text. You do not need to enclose the `label` or `input` elements within `div` elements.

![Table of fields and controls from the payment form. The table has 9 rows and 5 columns. The column headings from left to right are Label, Data Field, Control ID, Data Type, and Required. The row details are as follows. Row 1: Label, First Name; Data Field, fName; Control ID, firstBox; Data Type, text; Required, yes. Row 2: Label, Last Name; Data Field, lName; Control ID, lastBox; Data Type, text; Required, yes. Row 3: Label, Street Address; Data Field, street; Control ID, streetBox; Data Type, text; Required, yes. Row 4: Label, Street Address (2); Data Field, street2; Control ID, streetBox2; Data Type, text; Required, no. Row 5: Label, City; Data Field, city; Control ID, cityBox; Data Type, text; Required, yes. Row 6: Label, State; Data Field, state; Control ID, stateBox; Data Type, text; Required, yes. Row 7: Label, ZIP backslash Postal Code; Data Field, zip; Control ID, zipBox; Data Type, text; Required, no. Row 8: Label, Country; Data Field, country; Control ID, countryBox; Data Type, text; Required, yes. Row 9: Label, Phone; Data Field, phone; Control ID, phoneBox; Data Type, tel; Required, yes.](../assets/le2NdknRIKbbuB3O89Su.png)
<sup>*Figure 7-68*</sup>

Create a data list with the ID `stateList` containing the two-letter abbreviations of all the states. (You can use the list of abbreviations in the *sb_state.txt* file.) Apply the data list to the `stateBox` input text box. 

The text of the zip field should follow the `^\d{5}(-\d{4})?$` regular expression pattern. The text of the phone field should follow the `^\d{10}$|^(\(\d{3}\)\s*)?\d{3}[\s-]?\d{4}$` pattern. Note that both regular expression patterns can be found in the *sb_regex.txt* file.


