import { useQuery } from '@tanstack/react-query';
import type { APIResponse } from '../types/Character';
import { queryKeys } from './queryKeys';
import { useSearchStore } from '../stores/searchStore';

const BASE_URL = 'https://swapi.py4e.com/api/people';

export const fetchCharacters = async (
  searchTerm: string,
  page: number = 1
): Promise<APIResponse> => {
  const url = `${BASE_URL}/?page=${page}${
    searchTerm ? `&search=${encodeURIComponent(searchTerm)}` : ''
  }`;

  const res = await fetch(url);

  if (!res.ok) {
    const errorMessage = await extractErrorMessage(res);
    if (res.status >= 400 && res.status < 500) {
      throw new Error(`Client error (${res.status}): ${errorMessage}`);
    } else if (res.status >= 500) {
      throw new Error(`Server error (${res.status}): ${errorMessage}`);
    } else {
      throw new Error(`Unexpected error (${res.status})`);
    }
  }

  return res.json();
};

const extractErrorMessage = async (res: Response): Promise<string> => {
  try {
    const data = await res.json();
    if (typeof data === 'object' && data !== null && 'detail' in data) {
      return String(data.detail);
    }
    return JSON.stringify(data);
  } catch {
    return res.statusText || 'Unknown error';
  }
};

export const useCharacters = (searchTerm: string, page: number = 1) => {
  const { shouldFetch } = useSearchStore();

  return useQuery<
    APIResponse,
    Error,
    APIResponse,
    readonly [string, string, number]
  >({
    queryKey: queryKeys.characters(searchTerm, page),
    queryFn: () => fetchCharacters(searchTerm, page),
    enabled: shouldFetch,
    retry: 1,
    staleTime: 60 * 1000,
  });
};
