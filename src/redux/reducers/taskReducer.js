// Import des constantes de type d'actions
// Ces constantes correspondent aux types d'action définis dans taskConstants.js
import { ADD_TASK, TOGGLE_DONE, EDIT_TASK, REMOVE_TASK } from "../constants/taskConstants";

// État initial du reducer
// Commence avec un tableau vide de tâches
const initialState = {
  tasks: [],
};

// Fonction utilitaire pour générer un ID unique pour chaque tâche
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Reducer : fonction pure qui reçoit l'état actuel et une action
// et retourne le nouvel état
const taskReducer = (state = initialState, action) => {
  switch(action.type) {
    // ----------------------------------
    case ADD_TASK:
      // Ajout d'une nouvelle tâche
      // On garde toutes les tâches existantes et on ajoute la nouvelle
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { 
            id: generateId(),                // Génère un ID unique
            description: action.payload.description, // Récupère la description de l'action
            isDone: false                    // Tâche ajoutée par défaut non faite
          }
        ]
      };

    // ----------------------------------
    case TOGGLE_DONE:
      // Inverse le booléen isDone d'une tâche spécifique
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        )
      };

    // ----------------------------------
    case EDIT_TASK:
      // Modifie la description d'une tâche existante
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id 
            ? { ...task, description: action.payload.description } 
            : task
        )
      };

    // ----------------------------------
    case REMOVE_TASK:
      // Supprime une tâche du tableau
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };

    // ----------------------------------
    default:
      // Si l'action n'est pas reconnue, on retourne l'état actuel
      return state;
  }
};

// Export du reducer pour l'utiliser dans le store
export default taskReducer;
