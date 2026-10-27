# Reflection — Lab 4 Self-check

## 1. Why can't `FilterBar` and `TaskList` share filter state directly, without lifting it to a shared parent? (Strand 3)

FilterBar and TaskList are siblings, and in React the data only go down from parent to child. A sibling can not read the state of other sibling. So we put the `filter` state in TaskBoard (the parent) and pass it down to both of them.


## 2. What would go wrong, specifically, if `TaskList` used the array index as each `TaskCard`'s `key` instead of `task.id`? (Strand 2)

If I choose "Done" or "Open" filter, the tasks move to other index. React will match the cards by the index, so it can mix them and give one task the state or checkbox of another task. With `task.id` every card keep its own key, so this problem not happen.


## 3. In the sentence "props flow down, requests flow up," what in your `TaskBoard` app is an example of each direction? (Strand 3)

Props flow down: TaskBoard send `tasks` and `filter` to TaskList, and TaskList send `title` and `done` to every TaskCard. Requests flow up: when I click Add, NewTaskInput call `onAddTask`, and when I click the checkbox TaskCard call `onToggleTask`, so TaskBoard change the state.


# Reflection — Lab 5 Self-check

## 1. Why is an empty list not the same thing as an error, and what should change in the UI between the two? (Strand 1)

Empty means the request worked but there are no tasks yet. Error means the request failed. For empty, the UI shows "No tasks yet" and the form to add a task. For error, it shows "We couldn't load your tasks" and a "Try again" button.


## 2. Your form validates with safeParse on submit. Why does the error get stored in errors.title specifically, instead of one single error message for the whole form? (Strand 2)

Zod keeps each error with the field that caused it. So I can show the message right under the title input, and the user knows which field to fix. One message for the whole form would not show where the problem is.


## 3. What does aria-live actually do, and why does a loading message need it even though a sighted user can already see the screen change? (Strand 3)

`aria-live` makes the screen reader read new text in that area automatically. A blind user cannot see "Loading tasks..." change to the list. Without aria-live, they would not know the page is loading, finished, or failed.
