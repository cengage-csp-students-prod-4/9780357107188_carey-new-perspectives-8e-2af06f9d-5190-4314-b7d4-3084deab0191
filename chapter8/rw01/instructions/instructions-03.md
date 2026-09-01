# Add Track Cues

Open the _cp_captions2.vtt_ file and add an initial line to the text file indicating that this file is in WEBVTT format. Next, add the following track cues to the _cp_caption2.vtt_ file:

1. A **Title** cue appearing in the **0.5** seconds to **5** second interval containing the text **The Hat Rack Dance** enclosed in a class tag with the name `Title`. Set the `line` and `align` attributes for the caption to **10%** and **middle** respectively to place the caption centered and near the top of the video window.
2. A **Subtitle** cue in the **5.5** to **9** second interval with the text from **Royal Wedding (1951)**. Enclose “Royal Wedding (1951)” within `<i>` tags to italicize it. Place the caption at the **10%** `line` and `align` the caption text in the **middle**.
3. A **Finish** cue displayed from the **65** second mark (1 minute and 5 seconds) to the **71** second mark (1 minute and 11 seconds) and containing the text **See more videos at Cinema Penguin**. Enclose “Cinema Penguin” within `<i>` tags and place the caption at the **80%** `line` and **90%** position with the caption text aligned at the **end**.

# Track Styles

Next, open the _cp_media2.css_ file and within the "Media Styles" section, insert a style rule for all `audio` and `video` elements that displays them as blocks with a `width` of **95%**. Center the `audio` and `video` elements by setting the top/bottom margins to **20** pixels and left/right margins set to **auto**. Go to the "Track Styles" section and create a style rule for track cues that:

1. sets the background color to **transparent**,
2. adds a **black** text shadow with horizontal and vertical offsets of **1** pixel and a blur of **2** pixels,
3. sets the text color to **rgb(255, 177, 66)**, and
4. sets the font size to **1.2em** using the **sans serif** font family.

Create a style rule for track cues belonging to the `Title` class that sets the font size to **2em** and font family to **serif**.

Open the _cp_astaire.html_ file in the browser preview. Verify that you can play the audio and video clips and the layout matches that shown in _Figure 8–63_. Verify that captions are added to the video clip providing the title and subtitle of the clip at the start of the video and a message about Cinema Penguin at the end.

> While the audio clip will play, no audio will be present in the browser preview.
