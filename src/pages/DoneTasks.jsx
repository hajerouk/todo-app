import React from 'react';
import { useSelector } from 'react-redux';
import ListTask from '../components/ListTask';
import { Link } from 'react-router-dom';

export default function DoneTasks() {
  const tasks = useSelector(state => state.tasks.filter(t => t.isDone));

  return (
    <div>
      <h2>Done Tasks</h2>
      <ListTask tasks={tasks} />
      <Link to="/">Back to todos</Link>
    </div>
  );
}
