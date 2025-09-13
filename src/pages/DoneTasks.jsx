import React from 'react';
import { useSelector } from 'react-redux';
import ListTask from '../components/ListTask';
import { selectTasksByDone } from '../features/tasksSlice';
import { Link } from 'react-router-dom';

export default function DoneTasks() {
  const doneSelector = useSelector(selectTasksByDone(true));
  const tasks = doneSelector || [];

  return (
    <div>
      <h2>Done</h2>
      <ListTask tasks={tasks} />
      <div style={{ marginTop: 16 }}>
        <Link to="/">Back to todos</Link>
      </div>
    </div>
  );
}
