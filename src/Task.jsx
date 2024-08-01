import React from "react";

const Task = ({ task, toggleStatus }) => (
  <div className="task">
    <h3>{task.description}</h3>
    <p>Assignee: {task.assignee}</p>
    {task.status === "Pending" && <p>Deadline: {task.deadline}</p>}
    <p>Status: {task.status}</p>
    <button onClick={toggleStatus}>Toggle Status</button>
  </div>
);

export default Task;
