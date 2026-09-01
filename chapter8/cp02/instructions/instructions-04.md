# Create the Flutter Animation

Heather wants the bat and butterfly to flutter as they move across the animation box. Create an animation named `flyRight` with the following key frames:
1. at **25%** time, set the top coordinate to **150** pixels;
2. at **50%** time, set the top coordinate to **55** pixels;
3. at **65%** time, set the top coordinate to **120** pixels;
4. at **90%** time, set the top coordinate to **50** pixels; and
5. at **100%** time, set the top and left coordinates to **80** pixels and **100%**. 

# Apply the `playSprite` Animations
Sprites achieve the animation effect by changing the background image in `n – 1` discrete steps, where `n` is the number of frames in the sprite. Apply the `playSprite` animation to the `fox` `div` element after a **4** second delay over a time interval of **3.5** seconds and a steps value of **27**. Set the animation to loop infinitely. 

Apply the `playSprite` animation to the `bat` `div` element over a **2** second interval with **39** steps. Apply the `flyRight` animation over an **8** second interval with linear timing. Set both animations to loop infinitely. 

Apply the `playSprite` animation to the `butterfly` `div` element after a **3** second delay, with a playing time of **1** second spaced out in **33** steps. Apply the `flyRight` animation over a **6** second interval. Make the butterfly appear to hover by applying a **Cubic Bézier** curve to the `flyRight` timing with the function `cubic-bezier(0,1,0.73,0)`. Set both animations to loop infinitely.

Open *paa_game.html* file in the browser preview and hover your mouse pointer over the four links below the *Frustrated Fox* logo and verify that a gradient-filled bar grows beneath the links in response to the hover event. Verify that the animation box shows an animated bat and then a butterfly moving across the sky and that, after a short delay, an animated fox jumps up toward the bat and butterfly trying to catch them.
