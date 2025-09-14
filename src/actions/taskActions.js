import { ADD_TASK, TOGGLE_DONE, EDIT_TASK, REMOVE_TASK } from "../constants/taskConstants";
// Action creators
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { description },
});

export const toggleDone = (id) => ({
  type: TOGGLE_DONE,
  payload: id,
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description },
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});
