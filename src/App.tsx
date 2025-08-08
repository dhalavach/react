//import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SearchSection } from './components/SearchSection';
import { ResultsSection } from './components/ResultsSection';
//import { CharacterDetailsPanel } from './components/CharacterDetailsPanel';
import { SelectedItemsFlyout } from './components/SelectedItemsFlyout';
import { About } from './components/About';
import { NotFound } from './components/NotFound';

export const AppContent = () => (
  <Routes>
    <Route
      path="/"
      element={
        <div data-testid="homepage" className="min-h-screen ...">
          <SearchSection />
          <ResultsSection />
          <div className="mt-8 text-center">
            <Link to="/about" className="...">
              About This Project
            </Link>
          </div>
          <SelectedItemsFlyout />
        </div>
      }
    />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
