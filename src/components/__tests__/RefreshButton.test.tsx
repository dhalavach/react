import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { RefreshButton } from '../RefreshButton';
import { useQueryClient } from '@tanstack/react-query';
import { useCharacters } from '../../api/api';

// Mock dependencies
vi.mock('@tanstack/react-query', () => ({
  useQueryClient: vi.fn(),
}));
vi.mock('../../api/api', () => ({
  useCharacters: vi.fn(),
}));
vi.mock('../../api/queryKeys', () => ({
  queryKeys: {
    characters: (searchTerm: string, page: number) => [
      'characters',
      searchTerm,
      page,
    ],
  },
}));

describe('RefreshButton', () => {
  const invalidateQueries = vi.fn();
  const defaultProps = { searchTerm: 'Luke', page: 1 };

  beforeEach(() => {
    (useQueryClient as Mock).mockReturnValue({ invalidateQueries });
    invalidateQueries.mockClear();
  });

  it('renders Refresh button', () => {
    (useCharacters as Mock).mockReturnValue({
      data: null,
      isFetching: false,
      error: null,
    });

    render(<RefreshButton {...defaultProps} />);
    expect(
      screen.getByRole('button', { name: /refresh/i })
    ).toBeInTheDocument();
  });

  it('disables button when isFetching is true', () => {
    (useCharacters as Mock).mockReturnValue({
      data: null,
      isFetching: true,
      error: null,
    });

    render(<RefreshButton {...defaultProps} />);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByText(/refreshing/i)).toBeInTheDocument();
  });

  it('shows error message when error exists', () => {
    (useCharacters as Mock).mockReturnValue({
      data: null,
      isFetching: false,
      error: { message: 'Network error' },
    });

    render(<RefreshButton {...defaultProps} />);
    expect(screen.getByText(/error: network error/i)).toBeInTheDocument();
  });

  it('renders character list when data is present', () => {
    (useCharacters as Mock).mockReturnValue({
      data: { results: [{ name: 'Luke Skywalker' }, { name: 'Leia Organa' }] },
      isFetching: false,
      error: null,
    });

    render(<RefreshButton {...defaultProps} />);
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Leia Organa')).toBeInTheDocument();
  });

  it('calls invalidateQueries with correct queryKey on button click', () => {
    (useCharacters as Mock).mockReturnValue({
      data: null,
      isFetching: false,
      error: null,
    });

    render(<RefreshButton {...defaultProps} />);
    fireEvent.click(screen.getByRole('button'));
    expect(invalidateQueries).toHaveBeenCalledWith({
      queryKey: ['characters', 'Luke', 1],
    });
  });
});
