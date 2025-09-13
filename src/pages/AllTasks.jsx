import React from 'react';
import { useSelector } from 'react-redux';
import AddTask from '../components/AddTask';
import ListTask from '../components/ListTask';
import { selectTasksByDone } from '../features/tasksSlice';
import { Link } from 'react-router-dom';

export default function AllTasks() {
  const notDoneSelector = useSelector(selectTasksByDone(false));
  const tasks = notDoneSelector || [];

  return (
    <div>
      <h2>To do</h2>
      <AddTask />
      <ListTask tasks={tasks} />
      <div style={{ marginTop: 16 }}>
        <Link to="/done">See done tasks →</Link>
      </div>
    </div>
  );
}
