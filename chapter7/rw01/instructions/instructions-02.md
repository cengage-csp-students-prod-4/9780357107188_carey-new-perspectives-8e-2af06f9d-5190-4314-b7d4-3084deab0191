# Document Setup

Open *rb_customer.html*, *rb_build.html*, and *rb_validate.css* files and enter your **name** and the **date** in the comment section of each file. Return to the *rb_customer.html* file and within the document `head`, insert links to the *rb_forms2.css* and *rb_validate.css* files.

Still within the document `head`, use the `script` element to link the file to the *rb_formsubmit2.js* file.

# Create the Form

Scroll down to the `section` element and, directly after the initial paragraph, insert a `form` element that employs the action at the fictional address *http://www.example.com/redball/customer* using the `post` method.

Within the `form` element, insert a `div` element that encloses a `label` with the text **Name\*** associated with the `nameBox` control. Also, within the `div` element, add an input text box with the ID `nameBox`, field name `custName`, and placeholder text **First and Last Name**. Make `custName` a required field.

