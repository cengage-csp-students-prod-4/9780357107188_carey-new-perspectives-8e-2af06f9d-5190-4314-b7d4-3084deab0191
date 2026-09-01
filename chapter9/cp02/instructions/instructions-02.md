# Document Setup

Open the _ja_vynes.html_ and _ja_quote.js_ files and enter your **name** and the **date** in the comment section of each file. Next, go to the _ja_vynes.html_ file and directly above the closing `</head>` tag, insert a `script` element that links the page to the _ja_quote.js_ file. Defer the loading of the script file until the rest of the page is loaded by the browser. Study the contents of the file.

# Complete the JavaScript File

Open the _ja_quote.js_ file and at the top of the file, insert a statement indicating that the code will be handled by the browser assuming strict usage. Directly below the comment section, insert a function named `randomInt` that will be used to generate a random integer. Specify two parameters for the function named lowest and size. The lowest parameter will specify the lowest possible value for the random integer and the size parameter will set the number of integers to be generated. Use those two parameter values and the `Math.floor()` and `Math.random()` methods to return a random integer within the specified range.

Above the `randomInt()` function insert a command to call the function, generating a random integer from **0** to **9**.

> Remember that the size of this interval is **10** because it includes **0** in its range.

Store the result from the function in the `randomQ` variable. Create a variable named `quoteElem` that references the first element in the document that has the quote tag **name**.

Call the `getQuote()` function using the `randomQ` variable as the parameter value to generate a random Jane Austen quote. Display the text of the quote as the inner HTML code of the `quoteElem` variable. Add appropriate comments to your code to document your work.

Open the _ja_vynes.html_ file in the browser preview and verify that a random Jane Austen quote appears at the top of the page. Reload the page several times and verify that with each reloading, a different Austen quote appears on the page.
