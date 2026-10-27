# Data UX Notes — Lab 5

## Strand 1 — What shows in the first 800ms?

**Prediction:** "Loading tasks..." because `status` starts as `"loading"` and the mock API waits 800ms.

**Result:** Correct. "Loading tasks..." shows first, then the tasks appear.


## Strand 1 — Why are empty and error separate?

Empty means the request worked but there are no tasks yet, so we invite the user to add one. Error means the request failed, so we tell the user and let them try again. If they were one state, a new user would think the app is broken.


## Strand 1 Challenge — Why keep "Loading" for at least 400ms?

If the loading message shows for only 50ms, it flashes and looks like a glitch. Keeping it for 400ms looks smoother. Fast responses become a little slower, but slow responses are not affected.


## Strand 2 Challenge — Why is the disabled button not enough?

`disabled` only blocks clicking the button. Anyone can remove it in DevTools and submit an empty title. I tried it, and Zod still caught it. So Zod is the real check, and the disabled button is only a hint for the user.


## Strand 3 — Keyboard-only pass

Using only Tab, Shift+Tab and Enter, I could reach the title field, type, reach the "Add task" button and submit. Everything worked.

The task checkboxes had no name, so a screen reader would only say "checkbox". I fixed this in the Challenge step.


## Strand 3 — Vague button text

The filter buttons said "All", "Done" and "Open", which is vague. I changed them to "Show all tasks", "Show done tasks" and "Show open tasks".


## Strand 3 Challenge — Lighthouse audit

**Score before: 85**

Issue fixed: the task checkboxes had no label. I added an `aria-label` like "Mark Read Chapter 4 as done".

**Score after: 93**
