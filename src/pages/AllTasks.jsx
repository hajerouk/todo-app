// On importe React pour créer un composant
import React from 'react';

// On importe le hook `useSelector` pour accéder au store Redux
import { useSelector } from 'react-redux';

// On importe le formulaire pour ajouter une nouvelle tâche
import AddTask from '../components/AddTask';

// On importe le composant qui affiche une liste de tâches
import ListTask from '../components/ListTask';

// On importe Link pour naviguer entre les pages avec React Router
import { Link } from 'react-router-dom';

// Définition du composant AllTasks : la page qui affiche les tâches "à faire"
export default function AllTasks() {
  // Récupération des tâches depuis le Redux store
  // Ici, on filtre pour ne garder que celles qui NE sont PAS encore faites
  const tasks = useSelector(state => state.tasks.filter(t => !t.isDone));

  return (
    <div>
      {/* Titre de la page */}
      <h2>To Do</h2>

      {/* Formulaire d’ajout d’une nouvelle tâche */}
      <AddTask />

      {/* Affichage de la liste des tâches "à faire" */}
      <ListTask tasks={tasks} />

      {/* Lien pour aller voir les tâches terminées */}
      <Link to="/done">See done tasks →</Link>
    </div>
  );
}
