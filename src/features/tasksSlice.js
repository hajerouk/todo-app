// Import de createSlice et nanoid depuis Redux Toolkit
// - createSlice : permet de générer automatiquement actions + reducer
// - nanoid : génère un id unique
import { createSlice, nanoid } from '@reduxjs/toolkit';

// État initial du slice
// Contient une liste de tâches avec 3 exemples de départ
const initialState = {
  // sample starter tasks; si un preloadedState est fourni au store, ces données seront remplacées
  tasks: [
    { id: nanoid(), description: 'Buy groceries', isDone: false },
    { id: nanoid(), description: 'Finish project checkpoint', isDone: false },
    { id: nanoid(), description: 'Read for 30 minutes', isDone: true },
  ],
};

// Création du slice Redux
// createSlice génère :
// - le reducer
// - les actions correspondantes (addTask, toggleDone, editTask, removeTask)
const tasksSlice = createSlice({
  name: 'tasks',        // nom du slice → utilisé comme clé dans le store
  initialState,         // état initial
  reducers: {
    // Ajouter une tâche
    addTask: {
      // reducer = logique métier : ajoute la tâche au state
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
      // prepare = permet de construire l’action avant qu’elle arrive au reducer
      // Ici, on ajoute un id unique avec nanoid
      prepare(description) {
        return { payload: { id: nanoid(), description, isDone: false } };
      },
    },
    // Basculer une tâche en "faite" ou "à faire"
    toggleDone(state, action) {
      const id = action.payload;
      const t = state.tasks.find(task => task.id === id);
      if (t) t.isDone = !t.isDone; // inversion du booléen
    },
    // Modifier la description d'une tâche existante
    editTask(state, action) {
      const { id, description } = action.payload;
      const t = state.tasks.find(task => task.id === id);
      if (t) t.description = description;
    },
    // Supprimer une tâche
    removeTask(state, action) {
      const id = action.payload;
      state.tasks = state.tasks.filter(t => t.id !== id);
    },
  },
});

// Export des actions générées automatiquement par createSlice
// Exemple d’utilisation : dispatch(addTask("Nouvelle tâche"))
export const { addTask, toggleDone, editTask, removeTask } = tasksSlice.actions;

// -------------------
// Selectors
// -------------------
// selectAllTasks : renvoie toutes les tâches
export const selectAllTasks = state => state.tasks.tasks;

// selectTasksByDone : renvoie seulement les tâches faites ou pas faites selon le paramètre
export const selectTasksByDone = done => state => 
  state.tasks.tasks.filter(t => t.isDone === done);

// Export du reducer généré par createSlice (à utiliser dans le store)
export default tasksSlice.reducer;
