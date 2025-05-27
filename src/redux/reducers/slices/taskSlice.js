import { createSlice } from "@reduxjs/toolkit";

import { taskFindAll } from "../../api/services/taskService";

const initialState = {
    isLoading: false,
    tasks: [],
    error: null,
    
};
const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(taskFindAll.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(taskFindAll.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tasks = action.payload;
            })
            .addCase(taskFindAll.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            });
    },

});
export default taskSlice.reducer;