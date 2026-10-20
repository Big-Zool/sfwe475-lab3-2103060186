# Reflection — Lab 4 Self-check

## 1. Why can't `FilterBar` and `TaskList` share filter state directly, without lifting it to a shared parent? (Strand 3)

FilterBar and TaskList are siblings, and in React the data only go down from parent to child. A sibling can not read the state of other sibling. So we put the `filter` state in TaskBoard (the parent) and pass it down to both of them.


## 2. What would go wrong, specifically, if `TaskList` used the array index as each `TaskCard`'s `key` instead of `task.id`? (Strand 2)

If I choose "Done" or "Open" filter, the tasks move to other index. React will match the cards by the index, so it can mix them and give one task the state or checkbox of another task. With `task.id` every card keep its own key, so this problem not happen.


## 3. In the sentence "props flow down, requests flow up," what in your `TaskBoard` app is an example of each direction? (Strand 3)

Props flow down: TaskBoard send `tasks` and `filter` to TaskList, and TaskList send `title` and `done` to every TaskCard. Requests flow up: when I click Add, NewTaskInput call `onAddTask`, and when I click the checkbox TaskCard call `onToggleTask`, so TaskBoard change the state.
