import React from 'react';
import Task from './task';

export default function ListTask({ tasks }) {
  if (!tasks || tasks.length === 0) return <p className="empty">No tasks here.</p>;
  return (
    <div className="list">
      {tasks.map(t => <Task key={t.id} task={t} />)}
    </div>
  );
}
