import React from 'react';
import { useSelector } from 'react-redux';
import AddTask from '../components/AddTask';
import ListTask from '../components/ListTask';
import { Link } from 'react-router-dom';

export default function AllTasks() {
  const tasks = useSelector(state => state.tasks.filter(t => !t.isDone));

  return (
    <div>
      <h2>To Do</h2>
      <AddTask />
      <ListTask tasks={tasks} />
      <Link to="/done">See done tasks →</Link>
    </div>
  );
}
