import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact component={HomePage} />
            <Route path="/drift" component={DriftPage} />
            <Route path="/timeattack" component={TimeAttackPage} />
            <Route path="/forza" component={ForzaPage} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
