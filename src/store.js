import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasksSlice';

// try to load persisted tasks (array) from localStorage
const persisted = (() => {
  try {
    const raw = localStorage.getItem('tasks_v1');
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
})();

const preloadedState = persisted ? { tasks: { tasks: persisted } } : undefined;

const store = configureStore({
  reducer: { tasks: tasksReducer },
  preloadedState,
});

// persist tasks to localStorage
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('tasks_v1', JSON.stringify(state.tasks.tasks));
  } catch (e) {
    // ignore write errors
  }
});

export default store;
