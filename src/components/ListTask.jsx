// On importe React (nécessaire pour créer des composants React)
import React from 'react';

// On importe le composant Task qui va afficher une tâche individuelle
import Task from './task';

// Définition d’un composant fonctionnel ListTask
// Il reçoit en props un tableau `tasks` (la liste des tâches à afficher)
export default function ListTask({ tasks }) {

  // Si `tasks` est vide ou non défini, on affiche simplement un message
  if (!tasks || tasks.length === 0) return <p>No tasks here</p>;

  // Sinon, on parcourt le tableau de tâches avec `map`
  // et on rend un composant <Task /> pour chaque élément
  return (
    <div>
      {tasks.map(t => (
        // Chaque tâche est passée en props au composant Task
        // On utilise `t.id` comme `key` pour aider React à optimiser le rendu
        <Task key={t.id} task={t} />
      ))}
    </div>
  );
}
