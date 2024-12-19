import React, { useState } from "react";
import defaultTasksData from "../json/taskData.json";
const defaultTaskFormData = {
  id: "",
  name: "",
  description: "",
  priority: "Low",
};
const priorityOptions = ["Low", "Medium", "High"];
const Task = () => {
  const [tasks, setTasks] = useState(defaultTasksData);
  const [taskFormData, setTaskFormData] = useState(defaultTaskFormData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskFormData.id) {
      handleUpdateTask();
    } else {
      handleAddTask();
    }
    setTaskFormData(defaultTaskFormData);
  };
  const handleAddTask = () => {
    const newId = Date.now().toString();
    setTasks((prev) => [...prev, { ...taskFormData, id: newId }]);
  };
  const handleUpdateTask = () => {
    setTasks((prev) => prev.map((task) => (task.id === taskFormData.id ? taskFormData : task))
    );
  };
  const handleEditTask = (task) => {
    setTaskFormData(task);
  };
  const handleDeleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskFormData({ ...taskFormData, [name]: value });
  };
  return (
    <div style={{ maxWidth: "600px", margin: "auto", border:"1px solid black", marginTop:"50px" }}>
      <h2>Task Manager Crud</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={taskFormData.name}
          placeholder="Task name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          value={taskFormData.description}
          placeholder="Task description"
          onChange={handleChange}
          required
        />
        <select
          name="priority"
          value={taskFormData.priority}
          onChange={handleChange}
        >
          <option>Select priority</option>
          {priorityOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        <button
          type="submit"
          style={{ marginLeft: "10px", width: "100px", fontWeight: "bolder" }}
        >
          {taskFormData.id ? "Update" : "Add"}
        </button>
      </form>
      <ul style={{ listStyle: "none", padding:0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <strong>{task.name}</strong> - {task.description} (priority:{" "}
            {task.priority})
            <div>
              <button onClick={() => handleEditTask(task)}>Edit Task</button>
              <button onClick={() => handleDeleteTask(task.id)}>
                Delete Task
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
