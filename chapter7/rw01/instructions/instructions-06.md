Next, you will create a form that customers will use to build their customized pizzas. A preview of the form is shown in *Figure 7–64*.

![A screenshot of a webpage displays the Red Ball Pizza form to Build a Pizza. The webpage content contains descriptive text at the top, followed by three fields and two radio option buttons below. This is followed by two sections labeled Meat toppings and Vegetable toppings listing the choice of toppings. An Add to your Order button is located at the left bottom of the webpage.](../assets/QfryT9cyQcOmFR58T6x8.png)
<sup>*Figure 7-64*</sup>

# Document Setup

Return to the *rb_build.html* file and insert a `link` to the *rb_forms2.css* file and add a `script` element to `link` the file to the *rb_formsubmit2.js* file. Scroll down to the `section` element, insert a `form` element below the paragraph element that employs the action at the fictional address `http://www.example.com/redball/build` using the `post` method.

# Create the Pizza Customization Form 

Within the `form` element, add a `div` element containing the following elements:
1. A `label` with the text **Quantity** associated with the `quantityBox` control.
2. A spinner control with the ID `quantityBox` and the field name **pizzaQuantity**. Have the value of the field range from **1** to **10** with a default value of **1**. 

Add a second `div` element that displays images of the pizza sizes, containing the following elements:
1. An inline image set to the image file *rb_sizes.png*.
2. A `label` with the text **Pizza Size** associated with the `sizeBox` control.
3. A range slider with the ID `sizeBox` and the field name `pizzaSize` ranging from **10** to **16** in steps of **2** with a default value of **14**.
 
