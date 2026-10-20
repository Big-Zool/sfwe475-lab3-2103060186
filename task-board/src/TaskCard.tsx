import type { Task } from "./schemas";

type TaskCardProps = Pick<Task, "id" | "title" | "done" | "dueDate"> & {
  onToggleTask: (id: number) => void;
};

function TaskCard({ id, title, done, dueDate, onToggleTask }: TaskCardProps) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      {dueDate && <p>Due: {dueDate}</p>}
      <input
        type="checkbox"
        checked={done}
        onChange={() => onToggleTask(id)}
      />
    </div>
  );
}

export default TaskCard;
