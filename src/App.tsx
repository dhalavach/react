//import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SearchSection } from './components/SearchSection';
import { ResultsSection } from './components/ResultsSection';
//import { CharacterDetailsPanel } from './components/CharacterDetailsPanel';
import { SelectedItemsFlyout } from './components/SelectedItemsFlyout';
import { About } from './components/About';
import { NotFound } from './components/NotFound';
//import { ThemeProvider } from './contexts/ThemeContext';
//import { PaginationControls } from './components/PaginationControls';
//import { CharacterDetailsPanel } from './components/CharacterDetailsPanel';
//import { useCharacterDetailsStore } from './stores/characterDetailsStore';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50 flex flex-col relative dark:bg-gray-900 transition-colors">
              <SearchSection />
              <ResultsSection />

              <div className="mt-8 text-center">
                <Link
                  to="/about"
                  className="inline-block text-base font-medium text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors border border-blue-600 dark:border-blue-400 px-4 py-2 rounded-lg"
                >
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
    </Router>
  );
};

export default App;
