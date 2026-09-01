# Cube Styles

Go to the "Cube Styles" section. Here you’ll create the receding cube effect that appears in the center of the page. The cube has been constructed by creating a `div` element with the id `cube` containing five `div` elements belonging to the `cube_face` class with the ids `cube_bottom`, `cube_top`, `cube_left`, `cube_right`, and `cube_front`. (There will be no back face for this cube.) Currently the five faces are superimposed upon each other. To create the cube you have to shift and rotate each face in 3D space so that they form the five faces of the cube. First, position the cube on the page by creating a style rule for the `div#cube` selector containing the following styles:
1. Place the element using relative positioning.
2. Set the top margin to **180** pixels, the bottom margin to **150** pixels, and the left/right margins to **auto**.
3. Set the `width` and `height` to **400** pixels.
4. Set the perspective of the space to **450** pixels. 

For each `div` element of the `cube_face` class, create a style rule that places the faces with absolute positioning and sets their `width` and `height` to **400** pixels. 

Finally, you’ll construct the cube by positioning each of the five faces in 3D space so that they form the shape of a cube. Add the following style rules for each of the five faces to transform their appearance.
1. Translate the `cube_front div` element **–50** pixels along the z-axis.
2. Translate the `cube_left div` element **–200** pixels along the x-axis and rotate it **90°** around the y-axis.
3. Translate the `cube_right div` element **200** pixels along the x-axis and rotate it  **90°** counter-clockwise around the y-axis.
4. Translate the `cube_top div` element **–200** pixels along the y-axis and rotate it **90°** counter-clockwise around the x-axis.
5. Translate the `cube_bottom div` element **200** pixels along the y-axis and rotate it **90°** around the x-axis.

 