# React Notes — Lab 4

## Strand 1 — Props vs state

**What is the difference between `title` (a prop) and `done` (now state)? Why can `TaskCard` change one but not the other?**

title is a prop, so it came from the parent (App). TaskCard only read it, it can not change it. done is state, it live inside TaskCard and TaskCard can change it with setDone when I click the checkbox. So the parent give the props, but the component own its state.


## Strand 2 — Keys

**Why is using the `map()` callback's array index (e.g. `key={index}`) instead of `task.id` risky if the list can be reordered or filtered?**

React use the key to know which card is which. The index is only the place in the list, not the task. If the list change order or some task is filter out, the index move to another task, so React can think it is the same card and give it the wrong state (for example the checkbox is checked on the wrong task). task.id always stay with the same task, so it is safe.


## Strand 2 — Controlled input experiment

**What happened when you temporarily removed the `onChange` handler from `NewTaskInput` and tried typing?**

When I remove (onChange), I can not type anything, the input stay empty. This is because the value come from text state, and nothing update the state anymore. Also React show a warning in the console that I gave value without onChange so the field is read-only.


## Strand 3 — The round trip of one click

**Explain the full round trip of clicking "Add": which component owns the state, which component asked for the change, and how did the request get from one to the other?**

TaskBoard own the tasks state. NewTaskInput ask for the change when I click Add. TaskBoard give NewTaskInput the function handleAddTask as the prop onAddTask. When I click Add, NewTaskInput call onAddTask(text), this run setTasks in TaskBoard, then TaskBoard render again and send the new tasks to TaskList as prop, so the new card show on the screen.
