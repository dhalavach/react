import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NotFound } from '../NotFound';
import { BrowserRouter } from 'react-router-dom';

describe('NotFound Component', () => {
  const renderNotFound = () => {
    return render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  };

  it('renders the 404 error message with correct elements', () => {
    renderNotFound();

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    expect(
      screen.getByText(
        /The page you're looking for doesn't exist in this galaxy/
      )
    ).toBeInTheDocument();
  });

  it('displays the AlertTriangle icon with correct styling', () => {
    renderNotFound();

    const iconContainer = screen.getByTestId('error-icon-container');
    const icon = screen.getByTestId('error-icon');

    expect(iconContainer).toHaveClass('bg-red-100 rounded-full');
    expect(icon).toHaveClass('text-red-600');
    expect(icon).toBeInstanceOf(SVGElement);
  });

  it('renders both navigation links with correct properties', () => {
    renderNotFound();

    const homeLink = screen.getByRole('link', { name: /Return to Home/ });
    const searchLink = screen.getByRole('link', { name: /Search Characters/ });

    expect(homeLink).toBeInTheDocument();
    expect(searchLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
    expect(searchLink).toHaveAttribute('href', '/');

    expect(homeLink).toHaveClass('bg-blue-600 text-white hover:bg-blue-700');
    expect(searchLink).toHaveClass(
      'bg-gray-100 text-gray-700 hover:bg-gray-200'
    );
  });

  it('includes icons in the navigation buttons', () => {
    renderNotFound();

    const homeIcon = screen.getByTestId('home-icon');
    const searchIcon = screen.getByTestId('search-icon');

    expect(homeIcon).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
    expect(homeIcon).toBeInstanceOf(SVGElement);
    expect(searchIcon).toBeInstanceOf(SVGElement);
  });

  it('renders the footer message', () => {
    renderNotFound();

    expect(
      screen.getByText('May the Force be with you on your way back!')
    ).toBeInTheDocument();
  });

  it('has proper responsive classes', () => {
    renderNotFound();

    const container = screen.getByTestId('not-found-container');
    expect(container).toHaveClass('min-h-screen');
    expect(container).toHaveClass('px-4');
    expect(container).toHaveClass('flex items-center justify-center');
  });
});
