import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  // sample starter tasks; if preloadedState provided these will be overridden
  tasks: [
    { id: nanoid(), description: 'Buy groceries', isDone: false },
    { id: nanoid(), description: 'Finish project checkpoint', isDone: false },
    { id: nanoid(), description: 'Read for 30 minutes', isDone: true },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
      prepare(description) {
        return { payload: { id: nanoid(), description, isDone: false } };
      },
    },
    toggleDone(state, action) {
      const id = action.payload;
      const t = state.tasks.find(task => task.id === id);
      if (t) t.isDone = !t.isDone;
    },
    editTask(state, action) {
      const { id, description } = action.payload;
      const t = state.tasks.find(task => task.id === id);
      if (t) t.description = description;
    },
    removeTask(state, action) {
      const id = action.payload;
      state.tasks = state.tasks.filter(t => t.id !== id);
    },
  },
});

export const { addTask, toggleDone, editTask, removeTask } = tasksSlice.actions;

// selectors
export const selectAllTasks = state => state.tasks.tasks;
export const selectTasksByDone = done => state => state.tasks.tasks.filter(t => t.isDone === done);

export default tasksSlice.reducer;
