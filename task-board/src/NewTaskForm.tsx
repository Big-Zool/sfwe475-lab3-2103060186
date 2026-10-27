import { useState } from "react";

function NewTaskForm() {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // validation goes here next
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
