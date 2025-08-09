import { CharacterCard } from './CharacterCard';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import { PaginationControls } from './PaginationControls';
import {
  useCurrentPage,
  usePaginationActions,
} from '../stores/currentPageStore';
import { useSearchTerm } from '../stores/searchStore';
import { useCharacters } from '../api/api';
import { useEffect, useState } from 'react';
import { CharacterDetailsPanel } from './CharacterDetailsPanel';
import { useCharacterDetailsStore } from '../stores/characterDetailsStore';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../api/queryKeys';
import { RefreshCw, Check } from 'lucide-react';

export const ResultsSection = () => {
  const searchTerm = useSearchTerm();
  const currentPage = useCurrentPage();
  const { updatePaginationData } = usePaginationActions();
  const { openPanel } = useCharacterDetailsStore();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { data, isLoading, isError, refetch } = useCharacters(
    searchTerm,
    currentPage
  );

  useEffect(() => {
    if (data?.count != null) {
      const totalPages = Math.ceil(data.count / 10);
      updatePaginationData({ totalPages, totalCount: data.count });
    }
  }, [data?.count, updatePaginationData]);

  const queryClient = useQueryClient();

  const handleRefresh = async () => {
    setIsRefreshing(true);
    setShowSuccess(false);

    try {
      await queryClient.refetchQueries({
        queryKey: queryKeys.characters(searchTerm, currentPage),
        exact: true,
        type: 'active',
      });

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } finally {
      console.log('cache refreshed');
      setIsRefreshing(false);
    }
  };

  return (
    <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-4xl mx-auto">
        {isLoading && <LoadingSpinner />}

        {isError && (
          <ErrorMessage
            message="An error occurred while fetching results."
            onRetry={refetch}
          />
        )}

        {!isLoading && !isError && data?.count === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg dark:text-gray-400">
              No characters found. Try a different search term.
            </p>
          </div>
        )}

        {!isLoading && !isError && data && data?.count > 0 && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Search Results
                {data.count > 10 && (
                  <span className="text-gray-600 font-normal dark:text-gray-400">
                    {' '}
                    ({data.count} character{data.count !== 1 ? 's' : ''} found)
                  </span>
                )}
              </h2>
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors ${
                  isRefreshing ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                aria-label="Refresh cache"
              >
                {isRefreshing ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : showSuccess ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <RefreshCw className="w-4 h-4" />
                )}
                {isRefreshing
                  ? 'Refreshing...'
                  : showSuccess
                    ? 'Refreshed!'
                    : 'Refresh cache'}
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              {data.results.map((character) => (
                <CharacterCard
                  key={character.url}
                  character={character}
                  onClick={() => openPanel(character)}
                />
              ))}
            </div>
            <CharacterDetailsPanel />

            <PaginationControls />
          </div>
        )}
      </div>
    </div>
  );
};
