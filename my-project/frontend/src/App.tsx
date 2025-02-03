import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CreatePlan from './pages/CreatePlan';
import StudyPlan from './pages/StudyPlan';
import RevisionCenter from './pages/RevisionCenter';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-plan" element={<CreatePlan />} />
            <Route path="/study-plan" element={<StudyPlan />} />
            <Route path="/revision" element={<RevisionCenter />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;