# Create the Pizza Customization Form Continued...

Add a `div` element that provides the selection of pizza crusts containing the following:
1. The `label` **Pizza Crust** associated with the `crustBox` control.
2. A selection list for the `pizzaCrust` field with the ID `crustBox` and containing the following option values and text: **Thin**, **Thick**, **Stuffed**, and **Pan**.

Add a `div` element containing a check box with the ID `cheeseBox` for the `doubleCheese` field followed by the `label` **Double Cheese** associated with the `cheeseBox` control. Then, add a second check box with the ID `sauceBox` for the `doubleSauce` field followed by the `label` **Double Sauce** also associated with that check box.

# Meat Topping Options

Customers can choose what to place on their pizzas. Create a field set containing the legend **Meat Toppings**. Add the following content to the field set:
1. A `div` element containing the `label` Location but not associated with any form control. Next to the `label`, place the inline images *rb_full.png*, *rb_left.png*, *rb_right.png*, and *rb_none.png* with the alternate text **full**, **left**, **right**, and **none** used to graphically indicate where the meat ingredients should be placed on the pizza (on the full pie, the left side, the right side, or nowhere).
2. A `div` element containing the `label` **Pepperoni** and followed by four option buttons belonging to the pepperoni field and with the values **full**, **left**, **right**, and **none**. Make **none** checked by default.
3. Repeat *Step 2* above to insert `div` elements with the values used in *Step b* but associated with the **ham**, **pork**, **sausage**, and **chicken** fields.

# Vegetable Toppings

Using *Figure 7–60* as your guide, repeat the *Meat Topping Options* step above to create a field set with the legend **Vegetable Toppings**, followed by `div` elements with the values used in *Meat Topping Options* but associated with the **mushrooms**, **green peppers**, **onions**, **tomatoes**, and **jalapenos** fields.

At the bottom of the form, add a `div` element containing a submit button with the text **Add to your Order**.

Open *rb_build.html* in your browser. Verify that the content and layout of the form resemble that shown in *Figure 7–64*. Verify that all of the form controls work as expected, that is, you can only select one location for each ingredient option at a time.

