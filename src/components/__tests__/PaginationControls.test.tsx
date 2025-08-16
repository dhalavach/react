import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { PaginationControls } from '../PaginationControls';
import {
  useCurrentPage,
  usePaginationActions,
  usePaginationData,
} from '../../stores/currentPageStore';

vi.mock('../../stores/currentPageStore', () => ({
  useCurrentPage: vi.fn(),
  usePaginationActions: vi.fn(() => ({
    setCurrentPage: vi.fn(),
    setSearchTerm: vi.fn(),
    resetPagination: vi.fn(),
    updatePaginationData: vi.fn(),
  })),
  usePaginationData: vi.fn(),
}));

describe('PaginationControls', () => {
  const mockSetCurrentPage = vi.fn();
  const mockActions = {
    setCurrentPage: mockSetCurrentPage,
    setSearchTerm: vi.fn(),
    resetPagination: vi.fn(),
    updatePaginationData: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(usePaginationActions).mockReturnValue(mockActions);
    console.log(vi.mocked(useCurrentPage));
    console.log(vi.mocked(usePaginationData));
  });

  it('should not render when totalPages is 1', () => {
    vi.mocked(useCurrentPage).mockReturnValue(1);
    vi.mocked(usePaginationData).mockReturnValue({
      totalPages: 1,
      totalCount: 10,
    });

    const { container } = render(<PaginationControls />);
    expect(container.firstChild).toBeNull();
  });

  it('should render correctly with 5 pages', () => {
    vi.mocked(useCurrentPage).mockReturnValue(3);
    vi.mocked(usePaginationData).mockReturnValue({
      totalPages: 5,
      totalCount: 50,
    });

    render(<PaginationControls />);

    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('should render with ellipsis when many pages exist', () => {
    vi.mocked(useCurrentPage).mockReturnValue(5);
    vi.mocked(usePaginationData).mockReturnValue({
      totalPages: 10,
      totalCount: 100,
    });

    render(<PaginationControls />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getAllByText('...')).toHaveLength(2);
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('should highlight the current page', () => {
    vi.mocked(useCurrentPage).mockReturnValue(3);
    vi.mocked(usePaginationData).mockReturnValue({
      totalPages: 5,
      totalCount: 50,
    });

    render(<PaginationControls />);

    const currentPageButton = screen.getByText('3');
    expect(currentPageButton).toHaveClass('bg-blue-600');
    expect(currentPageButton).toHaveClass('text-white');
  });

  it('should disable Previous button on first page', () => {
    vi.mocked(useCurrentPage).mockReturnValue(1);
    vi.mocked(usePaginationData).mockReturnValue({
      totalPages: 5,
      totalCount: 50,
    });

    render(<PaginationControls />);

    const prevButton = screen.getByText('Previous');
    expect(prevButton).toBeDisabled();
  });

  it('should disable Next button on last page', () => {
    vi.mocked(useCurrentPage).mockReturnValue(5);
    vi.mocked(usePaginationData).mockReturnValue({
      totalPages: 5,
      totalCount: 50,
    });

    render(<PaginationControls />);

    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeDisabled();
  });

  it('should call setCurrentPage when clicking on a page number', () => {
    vi.mocked(useCurrentPage).mockReturnValue(3);
    vi.mocked(usePaginationData).mockReturnValue({
      totalPages: 5,
      totalCount: 50,
    });

    render(<PaginationControls />);

    fireEvent.click(screen.getByText('2'));
    expect(mockSetCurrentPage).toHaveBeenCalledWith(2);
  });

  it('should not call setCurrentPage when clicking on ellipsis', () => {
    vi.mocked(useCurrentPage).mockReturnValue(5);
    vi.mocked(usePaginationData).mockReturnValue({
      totalPages: 10,
      totalCount: 100,
    });

    render(<PaginationControls />);

    const ellipsisButtons = screen.getAllByText('...');
    fireEvent.click(ellipsisButtons[0]);
    expect(mockSetCurrentPage).not.toHaveBeenCalled();
  });

  it('should call setCurrentPage with previous page when Previous is clicked', () => {
    vi.mocked(useCurrentPage).mockReturnValue(3);
    vi.mocked(usePaginationData).mockReturnValue({
      totalPages: 5,
      totalCount: 50,
    });

    render(<PaginationControls />);

    fireEvent.click(screen.getByText('Previous'));
    expect(mockSetCurrentPage).toHaveBeenCalledWith(2);
  });

  it('should call setCurrentPage with next page when Next is clicked', () => {
    vi.mocked(useCurrentPage).mockReturnValue(3);
    vi.mocked(usePaginationData).mockReturnValue({
      totalPages: 5,
      totalCount: 50,
    });

    render(<PaginationControls />);

    fireEvent.click(screen.getByText('Next'));
    expect(mockSetCurrentPage).toHaveBeenCalledWith(4);
  });
});
