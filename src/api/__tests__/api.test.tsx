import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';

// Mock modules before importing the code under test
vi.mock('../../stores/searchStore', () => ({
  useSearchStore: vi.fn(),
}));

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
}));

import { fetchCharacters, useCharacters } from '../api';
import { queryKeys } from '../queryKeys';
import { useSearchStore } from '../../stores/searchStore';
import { useQuery } from '@tanstack/react-query';

// Give fetch a proper mock type once
const fetchMock = global.fetch as unknown as Mock;

describe('fetchCharacters', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('fetches and returns data successfully', async () => {
    const mockData = { count: 42, results: [] };
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await fetchCharacters('luke', 2);

    expect(fetch).toHaveBeenCalledWith(
      'https://swapi.py4e.com/api/people/?page=2&search=luke'
    );
    expect(data).toEqual(mockData);
  });

  it('throws client error with message from detail', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({ detail: 'Not found' }),
      statusText: 'Not Found',
    });

    await expect(fetchCharacters('foo')).rejects.toThrow(
      'Client error (404): Not found'
    );
  });

  it('throws server error with message from detail', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({ detail: 'Server crashed' }),
      statusText: 'Internal Server Error',
    });

    await expect(fetchCharacters('foo')).rejects.toThrow(
      'Server error (500): Server crashed'
    );
  });

  it('throws error with fallback message when json parsing fails', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: async () => {
        throw new Error('Invalid JSON');
      },
      statusText: 'Bad Request',
    });

    await expect(fetchCharacters('foo')).rejects.toThrow(
      'Client error (400): Bad Request'
    );
  });
});

describe('useCharacters hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls useQuery with correct parameters when shouldFetch is true', () => {
    (useSearchStore as unknown as Mock).mockReturnValue({ shouldFetch: true });

    const searchTerm = 'yoda';
    const page = 3;

    useCharacters(searchTerm, page);

    expect(useQuery).toHaveBeenCalledWith(
      expect.objectContaining({
        queryKey: queryKeys.characters(searchTerm, page),
        queryFn: expect.any(Function),
        enabled: true,
        retry: 1,
        staleTime: 60 * 1000,
      })
    );
  });

  it('sets enabled false when shouldFetch is false', () => {
    (useSearchStore as unknown as Mock).mockReturnValue({ shouldFetch: false });

    const searchTerm = '';
    const page = 1;

    useCharacters(searchTerm, page);

    expect(useQuery).toHaveBeenCalledWith(
      expect.objectContaining({
        enabled: false,
      })
    );
  });
});
