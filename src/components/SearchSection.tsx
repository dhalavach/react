'use client';

import { Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useSearchActions, useSearchTerm } from '../stores/searchStore';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useEffect, useCallback, useState } from 'react';

export const SearchSection = () => {
  const searchTerm = useSearchTerm();
  const { setSearchTerm, submitSearch } = useSearchActions();
  const [localStorageSearchTerm, setLocalStorageSearchTerm] = useLocalStorage(
    'starwars-search-term',
    ''
  );

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);

    if (searchTerm !== localStorageSearchTerm) {
      setSearchTerm(localStorageSearchTerm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorageSearchTerm]);

  const runSearch = useCallback(() => {
    setLocalStorageSearchTerm(searchTerm);
    submitSearch();
  }, [searchTerm, setLocalStorageSearchTerm, submitSearch]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      e.stopPropagation();
      runSearch();
    },
    [runSearch]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    [setSearchTerm]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        runSearch();
      }
    },
    [runSearch]
  );

  const handleButtonClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('The search button has been clicked.');
  }, []);

  // Avoid rendering mismatched value before hydration
  if (!hydrated) {
    return null;
  }

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700 transition-colors">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center dark:text-white">
          Star Wars Character Search
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
        >
          <ThemeToggle />

          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              data-testid="search-box"
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Search for Star Wars characters..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed dark:bg-gray-300"
            />
          </div>

          <button
            data-testid="search-button"
            type="submit"
            onClick={handleButtonClick}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
