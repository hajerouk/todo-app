import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';

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
    <form onSubmit={submit} style={{ marginBottom: '12px' }}>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add new task" />
      <button type="submit">Add</button>
    </form>
  );
}
