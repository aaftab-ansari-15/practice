import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../redux/taskSlice";
const defaultTaskData = {
  id: "",
  name: "",
  description: "",
  priority: "",
  status: "",
  category: "",
};
const priorityOptions = ["Low", "High", "Medium"];
const TaskCreate = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.tasks.formData);
  const [taskData, setTaskData] = useState(defaultTaskData);
  useEffect(() => {
    setTaskData(formData);
  }, [formData]);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.id) {
      dispatch(updateTask({data: taskData, taskId: taskData.id}))
    } else {
      const taskId = Math.random().toString(36).substring(2, 9);
      const newTask = { ...taskData, id: taskId };
      dispatch(addTask({ data: newTask }));
    }
    setTaskData(defaultTaskData);
  };
  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          name="name"
          value={taskData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Task Description"
          name="description"
          value={taskData.description}
          onChange={handleChange}
          required
        />
        <select
          name="priority"
          placeholder="Priority"
          value={taskData.priority}
          onChange={handleChange}
          required
        >
          <option>select priority</option>
          {priorityOptions.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        <button type="submit">
          {taskData.id ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskCreate;
