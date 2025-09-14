// Import des constantes de type d'actions
// Cela évite les fautes de frappe et centralise les noms d’actions
import { ADD_TASK, TOGGLE_DONE, EDIT_TASK, REMOVE_TASK } from "../constants/taskConstants";

// -------------------
// Action creators
// -------------------

// Action creator pour ajouter une tâche
// Retourne un objet { type, payload }
// `payload` contient uniquement la description ; l'id sera généré plus tard dans le reducer
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { description },
});

// Action creator pour changer l'état "fait / pas fait" d'une tâche
// Ici `payload` est simplement l'id de la tâche
export const toggleDone = (id) => ({
  type: TOGGLE_DONE,
  payload: id,
});

// Action creator pour éditer la description d'une tâche
// `payload` contient l'id et la nouvelle description
export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description },
});

// Action creator pour supprimer une tâche
// `payload` est l'id de la tâche à supprimer
export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});
