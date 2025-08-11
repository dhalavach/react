import { useQueryClient } from '@tanstack/react-query';
import { useCharacters } from '../api/api';
import { queryKeys } from '../api/queryKeys';

export const RefreshButton = ({
  searchTerm,
  page,
}: {
  searchTerm: string;
  page: number;
}) => {
  const queryClient = useQueryClient();
  const { data, isFetching, error } = useCharacters(searchTerm, page);

  const handleRefresh = () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.characters(searchTerm, page),
    });
  };

  return (
    <div>
      <button onClick={handleRefresh} disabled={isFetching}>
        {isFetching ? 'Refreshing...' : 'Refresh'}
      </button>

      {error && <div>Error: {error.message}</div>}
      {data && (
        <ul>
          {data.results.map((char) => (
            <li key={char.name}>{char.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
