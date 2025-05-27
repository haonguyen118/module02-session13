import { createAsyncThunk } from "@reduxjs/toolkit";
import {jsonAxios} from "./index"

export const taskFindAll = createAsyncThunk('tasks/taskFindAll', async () => {
    const resp = await jsonAxios.get('tasks');
    return resp.data;
});
export const taskAdd = async (newTask) => {
    const resp = await jsonAxios.post('tasks', newTask);
    return resp;
};
export const taskDelete = async (taskId) => {
    const resp = await jsonAxios.delete(`tasks/${taskId}`);
    return resp;
};
export const taskUpdate = async (newTask, updateId) => {
    const resp = await jsonAxios.put(`tasks/${updateId}`, newTask);
    return resp;
};
export const taskCheck = async (id, oldStatus) => {
    const resp = await jsonAxios.patch(`tasks/${id}`, { complete: !oldStatus });
    return resp;
}