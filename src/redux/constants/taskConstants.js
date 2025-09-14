// Définition des constantes pour les types d'actions Redux
// On centralise ici les noms pour éviter les fautes de frappe
// Exemple : si tu tapes "AD_TASK" par erreur dans un reducer, Redux ne réagira pas
// En utilisant ces constantes, tu t'assures de toujours référencer la bonne chaîne

export const ADD_TASK = "ADD_TASK";           // Ajouter une nouvelle tâche
export const TOGGLE_DONE = "TOGGLE_DONE";     // Marquer une tâche comme faite / pas faite
export const EDIT_TASK = "EDIT_TASK";         // Modifier la description d’une tâche
export const REMOVE_TASK = "REMOVE_TASK";     // Supprimer une tâche
