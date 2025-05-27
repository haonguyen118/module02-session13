import { combineReducers } from "@reduxjs/toolkit";
import taskSlice from "./slices/taskSlice"
const rootReducers = combineReducers({
    tasks: taskSlice,
});
export default rootReducers;