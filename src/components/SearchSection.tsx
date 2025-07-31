import React, { useState, useEffect, useCallback } from 'react';
import { Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Props {
  onSearch: (searchTerm: string, page?: number) => void;
  isLoading: boolean;
}

const STORAGE_KEY = 'starwars-search-term';
const DEBOUNCE_DELAY = 1000;

// const useLocalStorage = (key: string, initialValue: string) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? item : initialValue;
//     } catch (error) {
//       console.error(error);
//       return initialValue;
//     }
//   });

//   const setValue = (value: string) => {
//     try {
//       setStoredValue(value);
//       window.localStorage.setItem(key, value);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return [storedValue, setValue] as const;
// };

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const SearchSection = ({ onSearch, isLoading }: Props) => {
  const [searchTerm, setSearchTerm] = useLocalStorage(STORAGE_KEY, '');
  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_DELAY);
  const [shouldDebounce, setShouldDebounce] = useState(true);

  const prepareSearchTerm = (term: string) => {
    return term.trim();
  };

  useEffect(() => {
    if (shouldDebounce) {
      const preparedTerm = prepareSearchTerm(debouncedSearchTerm);
      if (preparedTerm) {
        onSearch(preparedTerm, 1);
      }
    }
  }, [debouncedSearchTerm, onSearch, shouldDebounce]);

  useEffect(() => {
    const preparedTerm = prepareSearchTerm(searchTerm);
    if (preparedTerm) {
      onSearch(preparedTerm, 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setShouldDebounce(true);
  };

  const handleSearch = useCallback(() => {
    const preparedTerm = prepareSearchTerm(searchTerm);
    if (preparedTerm) {
      setShouldDebounce(false);
      onSearch(preparedTerm, 1);
    }
  }, [onSearch, searchTerm]);

  useEffect(() => {
    if (!isLoading && !shouldDebounce) {
      setShouldDebounce(true);
    }
  }, [isLoading, shouldDebounce]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 p-6 dark:bg-gray-800  dark:border-gray-700 transition-colors">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center dark:text-white">
          Star Wars Character Search
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          <ThemeToggle />
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              data-testid="search-box"
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Search for Star Wars characters..."
              disabled={isLoading}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed dark:bg-gray-300"
            />
          </div>

          <button
            data-testid="search-button"
            onClick={handleSearch}
            disabled={isLoading}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </div>
    </div>
  );
};
