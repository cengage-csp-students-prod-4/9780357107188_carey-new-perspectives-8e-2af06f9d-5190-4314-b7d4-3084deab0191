# Validation Styles

Open the _sb_validate.css_ file to design the validation styles for the web form. Within the "Validation Styles" section, insert the following style rules to perform inline validation:

1. For every `input` element that is not a radio type and that has the focus, change the background color to **rgb(255, 218, 165)**.

> Use the attribute selector `input:not([type='radio'])` to select `input` elements that are not radio types.

2. For every `input` element that is not a radio type and that has the focus with a valid value, change the background color to **rgb(215, 255, 215)** and display the image file _sb_valid.png_ with no tiling in the right edge of the input box.
3. For every `input` element that is not a radio type and that has the focus with an invalid value, change the background color to **rgb(255, 245, 215)** and display the image file _sb_invalid.png_ with no tiling in the right edge of the input box.

Lastly, open _sb_payment.html_ in the browser preview. Verify that you cannot submit the form without all required fields entered in the proper format. Verify the validation checks for the credit card number by confirming that the form rejects the following credit card number 6012123456789019 (which does not follow a valid card number pattern). Further verify that the form accepts the following credit card number 6011123456789019 (which follows a valid card number pattern).
