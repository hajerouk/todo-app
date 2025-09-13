import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDone, editTask, removeTask } from '../features/tasksSlice';

export default function Task({ task }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(task.description);

  useEffect(() => {
    setDraft(task.description); // keep in sync if external changes happen
  }, [task.description]);

  const save = () => {
    const val = draft.trim();
    if (!val) return;
    dispatch(editTask({ id: task.id, description: val }));
    setEditing(false);
  };

  return (
    <div className="task-row">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleDone(task.id))}
        aria-label={`Mark ${task.description} as done`}
      />

      {!editing ? (
        <>
          <div className="task-desc" style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </div>
          <div className="task-actions">
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
          </div>
        </>
      ) : (
        <>
          <input
            className="task-edit-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') save(); if (e.key === 'Escape') { setEditing(false); setDraft(task.description); } }}
          />
          <div className="task-actions">
            <button onClick={save}>Save</button>
            <button onClick={() => { setEditing(false); setDraft(task.description); }}>Cancel</button>
          </div>
        </>
      )}
    </div>
  );
}
