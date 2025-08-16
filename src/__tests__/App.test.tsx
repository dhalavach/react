import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppContent } from '../app/App';
import { describe, expect, it } from 'vitest';
import { ThemeProvider } from '../contexts/ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('AppContent', () => {
  it('renders home page by default', () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <MemoryRouter initialEntries={['/']}>
            <AppContent />
          </MemoryRouter>
        </ThemeProvider>
      </QueryClientProvider>
    );
    expect(screen.getByTestId('homepage')).toBeInTheDocument();
  });

  it('renders About page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <AppContent />
      </MemoryRouter>
    );
    expect(screen.getByTestId('created-by')).toBeInTheDocument();
  });

  it('renders NotFound page for unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent']}>
        <AppContent />
      </MemoryRouter>
    );
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
