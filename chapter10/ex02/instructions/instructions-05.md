Open the _list10-2.js_ file and directly below your previous code create a `for` loop with a counter variable `i` that goes from **0** to **9**. Each time through the `for` loop add the following text to the `htmlCode` variable:

```html
<tr>
  <td><a href="links_i">titles_i</a></td>
  <td></td>
  <td>summaries_i</td>
  <td>ratings_i</td>
</tr>
```

where `i` is the value of the counter variable, and **links_i**, **titles_i**, **summaries_i**, and **ratings_i** are the values from the `links`, `titles`, `summaries`, and `ratings` array with index number `i`.

After the `for` loop add the following text to the `htmlCode` variable:

```html
	</tbody>
</table>
```

Store the value of the `htmlCode` variable in the inner HTML of the element with the ID **list**.
