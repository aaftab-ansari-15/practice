import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../redux/taskSlice";
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
export default store;
