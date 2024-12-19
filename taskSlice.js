import { createSlice } from "@reduxjs/toolkit";
import initialTaskData from "../json/taskData.json";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    allTasks: initialTaskData,
    formData: {},
  },
  reducers: {
    addTask: (state, action) => {
      const { data } = action.payload;
      state.allTasks.push(data);
    },
    setformData: (state, action) => {
      const { data } = action.payload;
      state.formData = data;
    },
    updateTask: (state, action) => {
      const { data, taskId } = action.payload;
      state.allTasks = state.allTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, ...data }; // Update the task with new data
        }
        return task; // Return the original task if no match
      });
    },
    deleteTask: (state, action) => {
      const { taskId } = action.payload;
      state.allTasks = state.allTasks.filter((task) => task.id !== taskId);
    },
  },
});
export const { addTask, updateTask, deleteTask, setformData } =
  taskSlice.actions;
export default taskSlice.reducer;
