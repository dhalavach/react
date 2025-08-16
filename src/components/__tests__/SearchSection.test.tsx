import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchSection } from '../SearchSection';

vi.mock('../ThemeToggle', () => ({
  ThemeToggle: () => <div data-testid="theme-toggle" />,
}));

const setSearchTermMock = vi.fn();
const submitSearchMock = vi.fn();

vi.mock('../../stores/searchStore', () => ({
  useSearchTerm: () => 'Luke',
  useSearchActions: () => ({
    setSearchTerm: setSearchTermMock,
    submitSearch: submitSearchMock,
  }),
}));

describe('SearchSection', () => {
  beforeEach(() => {
    setSearchTermMock.mockClear();
    submitSearchMock.mockClear();
  });

  it('renders the heading', () => {
    render(<SearchSection />);
    expect(screen.getByText(/Star Wars Character Search/i)).toBeInTheDocument();
  });

  it('renders the ThemeToggle', () => {
    render(<SearchSection />);
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
  });

  it('renders the search input with correct value', () => {
    render(<SearchSection />);
    const input = screen.getByTestId('search-box') as HTMLInputElement;
    expect(input.value).toBe('Luke');
  });

  it('calls setSearchTerm on input change', () => {
    render(<SearchSection />);
    const input = screen.getByTestId('search-box');
    fireEvent.change(input, { target: { value: 'Leia' } });
    expect(setSearchTermMock).toHaveBeenCalledWith('Leia');
  });

  it('calls submitSearch on button submit', () => {
    render(<SearchSection />);
    const button = screen.getByTestId('search-button');
    fireEvent.click(button);

    const form = button.closest('form');
    fireEvent.submit(form!);
    expect(submitSearchMock).toHaveBeenCalled();
  });

  it('stops propagation and logs on button click', () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    render(<SearchSection />);
    const button = screen.getByTestId('search-button');
    const event = new MouseEvent('click', { bubbles: true });
    fireEvent.click(button, event);
    expect(logSpy).toHaveBeenCalledWith('The search button has been clicked.');
    logSpy.mockRestore();
  });

  // it('input has correct placeholder', () => {
  //   render(<SearchSection />);
  //   const input = screen.getByTestId('search-box');
  //   expect(input).toHaveAttribute(
  //     'placeholder',
  //     'Search for Star Wars characters...'
  //   );
  // });

  it('button has correct text', () => {
    render(<SearchSection />);
    const button = screen.getByTestId('search-button');
    expect(button).toHaveTextContent('Search');
  });
});
