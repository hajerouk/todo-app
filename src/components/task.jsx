// Import de React et des hooks
import React, { useState } from 'react';

// Import du hook useDispatch pour envoyer des actions au store Redux
import { useDispatch } from 'react-redux';

// Import des actions Redux
import { toggleDone, editTask, removeTask } from '../redux/actions/taskActions';

// Composant Task : représente une tâche individuelle
// Reçoit en props un objet `task` { id, description, isDone }
export default function Task({ task }) {
  // Hook pour dispatcher des actions Redux
  const dispatch = useDispatch();

  // État local pour savoir si on est en mode édition
  const [editing, setEditing] = useState(false);

  // État local pour stocker la valeur temporaire quand on édite la description
  const [draft, setDraft] = useState(task.description);

  // Fonction pour sauvegarder les modifications d'une tâche
  const save = () => {
    const val = draft.trim(); // Supprime les espaces en début/fin
    if (!val) return;         // Ne rien faire si champ vide
    dispatch(editTask(task.id, val)); // Dispatch de l'action editTask avec id + nouvelle description
    setEditing(false);        // Quitte le mode édition
  };

  return (
    <div style={{ display:'flex', alignItems:'center', marginBottom:'6px' }}>
      {/* Checkbox pour marquer la tâche comme faite ou pas faite */}
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleDone(task.id))}
      />

      {/* Si on n'est pas en mode édition */}
      {!editing ? (
        <>
          {/* Affiche la description de la tâche, barrée si faite */}
          <span style={{ marginLeft: 8, textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>

          {/* Bouton pour passer en mode édition */}
          <button onClick={() => setEditing(true)} style={{ marginLeft: 8 }}>Edit</button>

          {/* Bouton pour supprimer la tâche */}
          <button onClick={() => dispatch(removeTask(task.id))} style={{ marginLeft: 4 }}>Delete</button>
        </>
      ) : (
        <>
          {/* Champ texte pour éditer la tâche */}
          <input value={draft} onChange={e => setDraft(e.target.value)} style={{ marginLeft: 8 }} />

          {/* Bouton pour sauvegarder les modifications */}
          <button onClick={save} style={{ marginLeft: 8 }}>Save</button>

          {/* Bouton pour annuler l'édition et revenir à la description initiale */}
          <button
            onClick={() => { setEditing(false); setDraft(task.description); }}
            style={{ marginLeft: 4 }}
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
}
