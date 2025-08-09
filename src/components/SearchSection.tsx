import { Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useSearchActions, useSearchTerm } from '../stores/searchStore';

export const SearchSection = () => {
  const searchTerm = useSearchTerm();
  const { setSearchTerm, submitSearch } = useSearchActions();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    submitSearch();
  };

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
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  e.stopPropagation(); // stop Enter key from bubbling to ThemeToggle
                  submitSearch();
                }
              }}
              placeholder="Search for Star Wars characters..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed dark:bg-gray-300"
            />
          </div>

          <button
            data-testid="search-button"
            type="submit"
            onClick={(e) => {
              e.stopPropagation();
              console.log('The search button has been clicked.');
            }}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
