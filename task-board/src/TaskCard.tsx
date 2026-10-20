import type { Task } from "./schemas";

type TaskCardProps = Pick<Task, "title" | "done">;

function TaskCard({ title, done }: TaskCardProps) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>{done ? "Done" : "Not done yet"}</p>
    </div>
  );
}

export default TaskCard;
