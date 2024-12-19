import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, setformData, updateTask } from "../redux/taskSlice";

const TaskDisplay = () => {
  const dispatch = useDispatch();
  const taskData = useSelector((state) => state.tasks.allTasks);
  const handleEdit = (task) => {
    dispatch(setformData({ data: task }));
  };
  const handleDelete = (taskId) => {
    dispatch(deleteTask({ taskId: taskId }));
    console.log("deleteTask");
  };
  return (
    <ul style={{ listStyle: "none", padding: 0, border:"2px solid green", margin:"20px" }}>
      {taskData.map((task, index) => {
        return (
          <li
            key={index}
            style={{
              border:"1px solid red", 
              margin:"20px",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            <strong>{task.name}</strong> - {task.description} (Priority:{" "}
            {task.priority})
            <div>
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskDisplay;
