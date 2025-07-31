import { useState, useCallback } from 'react';
import { SearchSection } from './components/SearchSection';
import { ResultsSection } from './components/ResultsSection';
import { CharacterDetailsPanel } from './components/CharacterDetailsPanel';
import { APIService, createPaginationInfo } from './services/api';
import type { Character, PaginationInfo } from './types/Character';
import { About } from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { SelectedItemsFlyout } from './components/SelectedItemsFlyout';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [isDetailsPanelOpen, setIsDetailsPanelOpen] = useState(false);

  const handleSearch = useCallback(
    async (searchTerm: string, page: number = 1) => {
      setIsLoading(true);
      setError(null);
      setCurrentSearchTerm(searchTerm);

      try {
        const response = await APIService.searchCharacters(searchTerm, page);

        setCharacters(response.results);
        setPagination(createPaginationInfo(response, page));
      } catch (error) {
        console.error('Search error:', error);
        setError(
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred'
        );
        setCharacters([]);
        setPagination(null);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const handlePageChange = useCallback(
    (page: number) => {
      handleSearch(currentSearchTerm, page);
    },
    [currentSearchTerm, handleSearch]
  );

  const handleRetry = () => {
    const currentPage = pagination?.currentPage || 1;
    handleSearch(currentSearchTerm, currentPage);
  };

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
    setIsDetailsPanelOpen(true);
  };

  const handleCloseDetailsPanel = () => {
    setIsDetailsPanelOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-gray-50 flex flex-col relative dark:bg-gray-900 transition-colors">
                <SearchSection onSearch={handleSearch} isLoading={isLoading} />
                <ResultsSection
                  characters={characters}
                  pagination={pagination}
                  isLoading={isLoading}
                  error={error}
                  onRetry={handleRetry}
                  onPageChange={handlePageChange}
                  onCharacterClick={handleCharacterClick}
                />
                <div className="mt-8 text-center">
                  <Link
                    to="/about"
                    className="inline-block text-base font-medium text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors border border-blue-600 dark:border-blue-400 px-4 py-2 rounded-lg"
                  >
                    About This Project
                  </Link>
                </div>

                <CharacterDetailsPanel
                  character={selectedCharacter}
                  isOpen={isDetailsPanelOpen}
                  onClose={handleCloseDetailsPanel}
                />
                <SelectedItemsFlyout />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
