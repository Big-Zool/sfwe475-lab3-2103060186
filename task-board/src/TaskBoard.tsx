import { useState } from "react";
import type { Task } from "./schemas";
import TaskList from "./TaskList";
import NewTaskInput from "./NewTaskInput";
import FilterBar, { type Filter } from "./FilterBar";

function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Read Chapter 3", done: false },
    { id: 2, title: "Build TaskCard", done: true },
  ]);
  const [filter, setFilter] = useState<Filter>("all");

  function handleAddTask(title: string) {
    setTasks([...tasks, { id: tasks.length + 1, title, done: false }]);
  }

  return (
    <div>
      <NewTaskInput onAddTask={handleAddTask} />
      <FilterBar filter={filter} onFilterChange={setFilter} />
      <TaskList tasks={tasks} filter={filter} />
    </div>
  );
}

export default TaskBoard;
