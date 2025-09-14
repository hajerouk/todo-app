// Import de React et du hook useState pour gérer l'état local de l'input
import React, { useState } from 'react';

// Import de useDispatch pour envoyer des actions au store Redux
import { useDispatch } from 'react-redux';

// Import de l'action addTask définie dans actions/taskActions.js
import { addTask } from '../redux/actions/taskActions';

// Composant AddTask : formulaire pour ajouter une nouvelle tâche
export default function AddTask() {
  // État local pour stocker la valeur du champ texte
  const [text, setText] = useState('');

  // Hook Redux pour dispatcher une action
  const dispatch = useDispatch();

  // Fonction exécutée lors de la soumission du formulaire
  const submit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    const trimmed = text.trim(); // Supprime les espaces avant/après
    if (!trimmed) return; // Empêche d'ajouter une tâche vide

    // Envoi de l'action addTask au store Redux
    dispatch(addTask(trimmed));

    // Réinitialisation du champ texte après ajout
    setText('');
  };

  return (
    // Formulaire avec un champ texte + un bouton
    <form onSubmit={submit} style={{ marginBottom: '12px' }}>
      {/* Input contrôlé, lié à l'état local `text` */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task"
      />
      
      {/* Bouton qui soumet le formulaire */}
      <button type="submit">Add</button>
    </form>
  );
}
