import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/MainPage';
import PokePage from './pages/PokePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pokemon/:id" element={<PokePage />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;