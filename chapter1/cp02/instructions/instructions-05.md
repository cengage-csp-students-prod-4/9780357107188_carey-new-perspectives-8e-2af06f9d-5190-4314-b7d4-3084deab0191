# Create the FAQ Page
Go to the *dr_faq.html* file in your HTML editor. Within the document `head`, link the page to the *dr_base.css* and *dr_layout3.css* style sheets. 

Go to the *dr_index.html* file and copy the body's header content. Then, go to the *dr_faq.html* file and paste the copied content into the document `body`. Repeat with the body's footer so that the FAQ page has the same navigation list and `footer` as was used in the home page. Between the `header` and `footer` element, insert a `section` element. 

Within the `section` element, insert a `header` element with the `id` attribute **pagetop**. Within the `header`, insert the inline image file *dr_logo.png* with the alternate text **Diane’s Run** followed by the `h1` element with the text **Frequently Asked Questions**. 

Go to the *dr_faq.txt* file. This file contains a list of frequently asked questions followed by the question answers. Copy the text and then close the *dr_faq.txt* file. Then, go to the *dr_faq.html* file in your HTML editor and paste the copied text into the `section` element, directly after the `section` `header`.

Next, you’ll create a series of hypertext links between the list of questions and their answers within the same document. Make the following changes to the `section` element in the *dr_faq.html* file:
1. Mark the 13 questions at the top of the section as an ordered list.
2. Notice that below the ordered list you just created, the questions are repeated and each question is followed by its answer. Mark the text of those questions as an `h2` heading and the answer as a paragraph. Add an `id` attribute to each of the 13 `h2` headings with the first heading given the `id` **faq1**, the second heading **faq2**, and so forth down to **faq13** for the last `h2` heading.
3. After the last answer, insert a paragraph with the text **Return to the Top** and mark the text as a hypertext link pointing to the `header` element with the `id` **pagetop**.
4. Return to the ordered list at the top of the section that you created in *Step a*. Change each item in the ordered list to a hypertext link pointing to the `h2` heading containing the question’s answer that you created in *Step b*. For example, the first question "How do I sign up?" should be linked to the `h2` heading with the **faq1** `id`.

# Verify Your Progress
Pause and verify that the layout and appearance of the page resemble that shown in *Figure 1–52*. Verify that by clicking a question within the ordered list, the browser jumps to that question’s answer. Further, verify that clicking the **Return to the Top** link at the bottom of the page causes the browser to return to the top of the page.

