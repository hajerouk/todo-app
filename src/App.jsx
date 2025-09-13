import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import AllTasks from './pages/AllTasks';
import DoneTasks from './pages/DoneTasks';

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>ToDo App</h1>
        <nav>
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Todos</NavLink>
          <NavLink to="/done" className={({isActive}) => isActive ? 'active' : ''}>Done</NavLink>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<AllTasks />} />
          <Route path="/done" element={<DoneTasks />} />
        </Routes>
      </main>
    </div>
  );
}
