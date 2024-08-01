import React, { useState, useEffect } from "react";
import Task from "./Task";
import SearchFilter from "./SearchFilter";
import "./App.css";

const initialTasks = [
  {
    description: "Task 1",
    assignee: "John",
    deadline: "2024-08-15",
    status: "Pending",
  },
  {
    description: "Task 2",
    assignee: "Jane",
    deadline: "2024-08-20",
    status: "Pending",
  },
  {
    description: "Task 3",
    assignee: "Mike",
    deadline: "2024-08-10",
    status: "Completed",
  },
  {
    description: "Task 4",
    assignee: "Lisa",
    deadline: "2024-08-25",
    status: "Pending",
  },
  {
    description: "Task 5",
    assignee: "John",
    deadline: "2024-08-05",
    status: "Completed",
  },
  {
    description: "Task 6",
    assignee: "Jane",
    deadline: "2024-08-12",
    status: "Pending",
  },
  {
    description: "Task 7",
    assignee: "Mike",
    deadline: "2024-08-18",
    status: "Pending",
  },
  {
    description: "Task 8",
    assignee: "Lisa",
    deadline: "2024-08-22",
    status: "Completed",
  },
  {
    description: "Task 9",
    assignee: "John",
    deadline: "2024-08-07",
    status: "Pending",
  },
  {
    description: "Task 10",
    assignee: "Jane",
    deadline: "2024-08-30",
    status: "Completed",
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(initialTasks);

  useEffect(() => {
    setFilteredTasks(
      tasks.filter((task) =>
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, tasks]);

  const toggleStatus = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          status: task.status === "Pending" ? "Completed" : "Pending",
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="task-grid">
        {filteredTasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            toggleStatus={() => toggleStatus(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
