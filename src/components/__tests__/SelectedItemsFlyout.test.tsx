import { describe, it, vi, beforeEach, afterEach, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SelectedItemsFlyout } from '../SelectedItemsFlyout';
import * as store from '../../stores/selectedItemsStore';

describe('SelectedItemsFlyout', () => {
  const mockClearAll = vi.fn();
  const mockItems = [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'Blond',
      skin_color: 'Fair',
      eye_color: 'Blue',
      birth_year: '19BBY',
      gender: 'Male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: [1, 2, 3],
      species: [],
      vehicles: [1],
      starships: [1, 2],
      url: 'https://swapi.dev/api/people/1/',
    },
  ];

  beforeEach(() => {
    vi.spyOn(store, 'useSelectedItemsStore').mockReturnValue({
      selectedItems: mockItems,
      clearAll: mockClearAll,
      getSelectedCount: () => mockItems.length,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render when items are selected', () => {
    render(<SelectedItemsFlyout />);
    expect(screen.getByText('1 item selected')).toBeInTheDocument();
  });

  it('should trigger CSV download with correct content', () => {
    const appendChildSpy = vi.spyOn(document.body, 'appendChild');
    const removeChildSpy = vi.spyOn(document.body, 'removeChild');

    if (typeof URL.createObjectURL !== 'function') {
      (
        URL as typeof URL & { createObjectURL: (blob: Blob) => string }
      ).createObjectURL = vi.fn();
    }
    const createObjectURLSpy = vi.spyOn(URL, 'createObjectURL');
    createObjectURLSpy.mockReturnValue('blob:mock-url');

    const realLink = document.createElement('a');
    const setAttributeSpy = vi.spyOn(realLink, 'setAttribute');
    const clickMock = vi.fn();
    realLink.click = clickMock;

    const originalCreateElement = document.createElement;
    const createElementSpy = vi
      .spyOn(document, 'createElement')
      .mockImplementation((tagName: string) => {
        if (tagName === 'a') return realLink;
        return originalCreateElement.call(document, tagName);
      });

    render(<SelectedItemsFlyout />);
    const downloadButton = screen.getByTestId('download-button');

    fireEvent.click(downloadButton);

    expect(createElementSpy).toHaveBeenCalledWith('div');
    expect(createObjectURLSpy).toHaveBeenCalled();
    expect(setAttributeSpy).toHaveBeenCalledWith('href', 'blob:mock-url');
    expect(setAttributeSpy).toHaveBeenCalledWith('download', '1_items.csv');
    expect(clickMock).toHaveBeenCalled();
    expect(appendChildSpy).toHaveBeenCalled();
    expect(removeChildSpy).toHaveBeenCalledWith(realLink);
  });
});
