Create a `for` loop with a counter variable `i` that goes from **0** to **13** in increments of **1**. Each time through the `for` loop, add the following code to the value of the `htmlCode` variable:

```html
<figure>
  <img alt=" " src="slidei.jpg" />
  <figcaption>caption_i</figcaption>
</figure>
```

where `i` is the value of the counter variable and _caption_i_ is the value from the captions array with index number `i`.

After the `for` loop, change the inner HTML of the document element by the ID **gallery** to the value of the `htmlCode` variable.
