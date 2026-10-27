# Data UX Notes — Lab 5

## Strand 1 — What shows in the first 800ms?

**Prediction:** "Loading tasks..." because `status` starts as `"loading"` and the mock API waits 800ms.

**Result:** Correct. "Loading tasks..." shows first, then the tasks appear.


## Strand 1 — Why are empty and error separate?

Empty means the request worked but there are no tasks yet, so we invite the user to add one. Error means the request failed, so we tell the user and let them try again. If they were one state, a new user would think the app is broken.
