import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from '../Pagination';
import type { PaginationInfo } from '../../types/Character';

describe('Pagination', () => {
  const onPageChange = vi.fn();

  const renderPagination = (
    overrides: Partial<PaginationInfo> = {},
    isLoading = false
  ) => {
    const pagination: PaginationInfo = {
      currentPage: 3,
      totalPages: 10,
      totalCount: 100,
      hasNext: true,
      hasPrevious: true,
      ...overrides,
    };

    render(
      <Pagination
        pagination={pagination}
        onPageChange={onPageChange}
        isLoading={isLoading}
      />
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should not render when totalPages <= 1', () => {
    renderPagination({ totalPages: 1 });
    expect(screen.queryByText(/showing page/i)).not.toBeInTheDocument();
  });

  it('displays current page and total count info', () => {
    renderPagination();
    expect(
      screen.getByText('Showing page 3 of 10 (100 total characters)')
    ).toBeInTheDocument();
  });

  it('disables prev/first buttons when hasPrevious = false', () => {
    renderPagination({ currentPage: 1, hasPrevious: false });
    expect(screen.getByTitle('First page')).toBeDisabled();
    expect(screen.getByTitle('Previous page')).toBeDisabled();
  });

  it('disables next/last buttons when hasNext = false', () => {
    renderPagination({ currentPage: 10, hasNext: false });
    expect(screen.getByTitle('Next page')).toBeDisabled();
    expect(screen.getByTitle('Last page')).toBeDisabled();
  });

  it('disables all buttons when isLoading = true', () => {
    renderPagination({ hasNext: true, hasPrevious: true }, true);
    screen.getAllByRole('button').forEach((btn) => {
      expect(btn).toBeDisabled();
    });
  });

  it('calls onPageChange with correct values when nav buttons are clicked', () => {
    renderPagination();

    fireEvent.click(screen.getByTitle('First page'));
    expect(onPageChange).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByTitle('Previous page'));
    expect(onPageChange).toHaveBeenCalledWith(2);

    fireEvent.click(screen.getByTitle('Next page'));
    expect(onPageChange).toHaveBeenCalledWith(4);

    fireEvent.click(screen.getByTitle('Last page'));
    expect(onPageChange).toHaveBeenCalledWith(10);
  });

  it('renders visible page numbers with ellipses', () => {
    renderPagination({ currentPage: 5, totalPages: 10 });

    // Example range around page 5: [1, ..., 3, 4, 5, 6, 7, ..., 10]
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getAllByText('...')).toHaveLength(2);
    [3, 4, 5, 6, 7].forEach((p) => {
      expect(screen.getByText(String(p))).toBeInTheDocument();
    });
  });

  it('calls onPageChange when numbered page is clicked', () => {
    renderPagination({ currentPage: 5, totalPages: 10 });

    fireEvent.click(screen.getByText('4'));
    expect(onPageChange).toHaveBeenCalledWith(4);

    fireEvent.click(screen.getByText('7'));
    expect(onPageChange).toHaveBeenCalledWith(7);
  });
});
