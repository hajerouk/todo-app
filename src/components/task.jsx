import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDone, editTask, removeTask } from '../actions/taskActions';

export default function Task({ task }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(task.description);

  const save = () => {
    const val = draft.trim();
    if (!val) return;
    dispatch(editTask(task.id, val));
    setEditing(false);
  };

  return (
    <div style={{ display:'flex', alignItems:'center', marginBottom:'6px' }}>
      <input type="checkbox" checked={task.isDone} onChange={() => dispatch(toggleDone(task.id))} />
      {!editing ? (
        <>
          <span style={{ marginLeft: 8, textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.description}</span>
          <button onClick={() => setEditing(true)} style={{ marginLeft: 8 }}>Edit</button>
          <button onClick={() => dispatch(removeTask(task.id))} style={{ marginLeft: 4 }}>Delete</button>
        </>
      ) : (
        <>
          <input value={draft} onChange={e => setDraft(e.target.value)} style={{ marginLeft: 8 }} />
          <button onClick={save} style={{ marginLeft: 8 }}>Save</button>
          <button onClick={() => { setEditing(false); setDraft(task.description); }} style={{ marginLeft: 4 }}>Cancel</button>
        </>
      )}
    </div>
  );
}
