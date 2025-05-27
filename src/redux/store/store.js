import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "../reducers/combine";

const store = configureStore({
    reducer: rootReducers,
});
export default store;