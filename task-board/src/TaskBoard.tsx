import { useEffect, useState } from "react";
import type { CreateTaskInput, Task } from "./schemas";
import { simulateFetchTasks } from "./mockApi";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import FilterBar, { type Filter } from "./FilterBar";

const MIN_LOADING_MS = 400;

function TaskBoard() {
  const [status, setStatus] =
    useState<"loading" | "success" | "empty" | "error">("loading");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const startedAt = Date.now();

    // Wait until the loading message has been visible for at least
    // MIN_LOADING_MS before changing the status (the fetch itself is not delayed).
    function finishLoading(update: () => void) {
      const elapsed = Date.now() - startedAt;
      setTimeout(update, Math.max(0, MIN_LOADING_MS - elapsed));
    }

    simulateFetchTasks()
      .then((data) =>
        finishLoading(() => {
          setTasks(data);
          setStatus(data.length === 0 ? "empty" : "success");
        }),
      )
      .catch(() => finishLoading(() => setStatus("error")));
  }, [attempt]);

  function handleRetry() {
    setStatus("loading");
    setAttempt(attempt + 1);
  }

  function handleAddTask(input: CreateTaskInput) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: input.title,
        dueDate: input.dueDate,
        status: input.status,
        done: input.status === "done",
      },
    ]);
    setStatus("success");
  }

  function handleToggleTask(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  return (
    <div>
      <div aria-live="polite">
        {status === "loading" && <p>Loading tasks...</p>}
        {status === "error" && <p>We couldn't load your tasks.</p>}
        {status === "empty" && <p>No tasks yet. Add your first one below.</p>}
      </div>

      {status === "error" && <button onClick={handleRetry}>Try again</button>}

      {(status === "success" || status === "empty") && (
        <NewTaskForm onAddTask={handleAddTask} />
      )}

      {status === "success" && (
        <>
          <FilterBar filter={filter} onFilterChange={setFilter} />
          <TaskList
            tasks={tasks}
            filter={filter}
            onToggleTask={handleToggleTask}
          />
        </>
      )}
    </div>
  );
}

export default TaskBoard;
