import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    dispatch(addTask(trimmed));
    setText('');
  };

  return (
    <form onSubmit={submit} className="add-task-form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        aria-label="New task description"
      />
      <button type="submit">Add</button>
    </form>
  );
}
