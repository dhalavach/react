import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { fetchCharacters, useCharacters } from '../api';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

const QueryWrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = createTestQueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const mockApiResponse = {
  results: [{ name: 'Luke Skywalker', url: 'https://swapi.dev/api/people/1/' }],
  next: null,
  previous: null,
  count: 1,
};

beforeEach(() => {
  vi.resetAllMocks();
});

describe('fetchCharacters', () => {
  it('fetches character data successfully', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockApiResponse),
          status: 200,
        } as Response)
      )
    );

    const data = await fetchCharacters(1);
    expect(data).toEqual(mockApiResponse);
  });

  it('throws client error for 4xx response', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: false,
          status: 404,
          statusText: 'Not Found',
          json: () => Promise.resolve({ detail: 'Page not found' }),
        } as Response)
      )
    );

    await expect(fetchCharacters(2)).rejects.toThrow(
      'Client error (404): Page not found'
    );
  });

  it('throws server error for 5xx response', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: false,
          status: 500,
          statusText: 'Internal Server Error',
          json: () => Promise.resolve({ detail: 'Something broke' }),
        } as Response)
      )
    );

    await expect(fetchCharacters(3)).rejects.toThrow(
      'Server error (500): Something broke'
    );
  });

  it('handles malformed error response gracefully', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: false,
          status: 418,
          statusText: "I'm a teapot",
          json: () => Promise.reject(new Error('Invalid JSON')),
        } as Response)
      )
    );

    await expect(fetchCharacters(4)).rejects.toThrow(
      "Client error (418): I'm a teapot"
    );
  });
});

describe('useCharacters hook', () => {
  it('returns data when successful', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(mockApiResponse),
        } as Response)
      )
    );

    const { result } = renderHook(() => useCharacters(1), {
      wrapper: QueryWrapper,
    });

    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toEqual(mockApiResponse);
    expect(result.current.isError).toBe(false);
  });

  it('sets error state on 4xx response', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: false,
          status: 400,
          json: () => Promise.resolve({ detail: 'Bad request' }),
        } as Response)
      )
    );

    const { result } = renderHook(() => useCharacters(1), {
      wrapper: QueryWrapper,
    });

    await waitFor(() => result.current.isError);
    expect(result.current.error).toBeInstanceOf(Error);
    expect((result.current.error as Error).message).toMatch(
      /Client error \(400\)/
    );
  });

  it('retries on 5xx, but not on 4xx', async () => {
    const fetchSpy = vi.fn();

    fetchSpy
      .mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Server Error',
        json: () => Promise.resolve({ detail: 'Server down' }),
      })
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockApiResponse),
      });

    vi.stubGlobal('fetch', fetchSpy);

    const { result } = renderHook(() => useCharacters(1), {
      wrapper: QueryWrapper,
    });

    await waitFor(() => result.current.isSuccess);
    expect(fetchSpy).toHaveBeenCalledTimes(2);
    expect(result.current.data).toEqual(mockApiResponse);
  });
});
