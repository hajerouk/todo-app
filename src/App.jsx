import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import AllTasks from './pages/AllTasks';
import DoneTasks from './pages/DoneTasks';

export default function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '40px auto' }}>
      <header style={{ display:'flex', justifyContent:'space-between', marginBottom:'20px' }}>
        <h1>ToDo (Redux Classique)</h1>
        <nav>
          <NavLink to="/" style={{ marginRight:8 }}>Todos</NavLink>
          <NavLink to="/done">Done</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AllTasks />} />
          <Route path="/done" element={<DoneTasks />} />
        </Routes>
      </main>
    </div>
  );
}
