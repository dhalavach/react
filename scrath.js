import { useQuery } from '@tanstack/react-query';
const BASE_URL = 'https://swapi.py4e.com/api/people';

export const useCharacters = (searchTerm, page = 1) => {
  return useQuery({
    queryKey: ['characters', searchTerm, page],
    queryFn: async () => {
      const url = searchTerm
        ? `${BASE_URL}/?search=${encodeURIComponent(searchTerm)}&page=${page}`
        : `${BASE_URL}/?page=${page}`;

      const response = await fetch(url);

      if (!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          throw new Error(`Client error: ${response.status}`);
        } else if (response.status >= 500) {
          throw new Error(`Server error: ${response.status}`);
        } else {
          throw new Error('Unexpected error');
        }
      }

      return response.json();
    },
    retry: 1,
    staleTime: 60 * 1000, // 1 minute
  });
};

const testQuery = async (searchTerm, page) => {
  const url = searchTerm
    ? `${BASE_URL}/?search=${encodeURIComponent(searchTerm)}&page=${page}`
    : `${BASE_URL}/?page=${page}`;

  const response = await fetch(url);

  if (!response.ok) {
    if (response.status >= 400 && response.status < 500) {
      throw new Error(`Client error: ${response.status}`);
    } else if (response.status >= 500) {
      throw new Error(`Server error: ${response.status}`);
    } else {
      throw new Error('Unexpected error');
    }
  }

  return response.json();
};

const testResponse = await testQuery('Luke', 1);
const { results, isLoading, error, refetch } = testResponse;
console.log(results, isLoading, error, refetch);
