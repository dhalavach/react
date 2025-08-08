import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CharacterDetailsPanel } from '../CharacterDetailsPanel';

vi.mock('../../stores/characterDetailsStore', () => ({
  useCharacterDetailsStore: vi.fn(),
}));

vi.mock('lucide-react', () => ({
  X: () => <div data-testid="x-icon" role="button" />,
  User: () => <div data-testid="user-icon" />,
  Calendar: () => <div data-testid="calendar-icon" />,
  Ruler: () => <div data-testid="ruler-icon" />,
  Weight: () => <div data-testid="weight-icon" />,
  MapPin: () => <div data-testid="map-pin-icon" />,
  Film: () => <div data-testid="film-icon" />,
  Rocket: () => <div data-testid="rocket-icon" />,
  Car: () => <div data-testid="car-icon" />,
}));

import { useCharacterDetailsStore } from '../../stores/characterDetailsStore';

const mockCharacter = {
  name: 'Luke Skywalker',
  gender: 'male',
  birth_year: '19BBY',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  homeworld: 'Tatooine',
  films: ['A New Hope', 'Empire Strikes Back', 'Return of the Jedi'],
  species: ['Human'],
  starships: ['X-wing', 'Imperial shuttle'],
  vehicles: ['Snowspeeder'],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
};

describe('CharacterDetailsPanel', () => {
  const mockClosePanel = vi.fn();

  beforeEach(() => {
    vi.mocked(useCharacterDetailsStore).mockReturnValue({
      character: mockCharacter,
      isOpen: true,
      closePanel: mockClosePanel,
    });
    mockClosePanel.mockClear();
  });

  it('does not render if isOpen is false', () => {
    vi.mocked(useCharacterDetailsStore).mockReturnValue({
      character: mockCharacter,
      isOpen: false,
      closePanel: mockClosePanel,
    });
    const { container } = render(<CharacterDetailsPanel />);
    expect(container.firstChild).toBeNull();
  });

  it('does not render if character is null', () => {
    vi.mocked(useCharacterDetailsStore).mockReturnValue({
      character: null,
      isOpen: true,
      closePanel: mockClosePanel,
    });
    const { container } = render(<CharacterDetailsPanel />);
    expect(container.firstChild).toBeNull();
  });

  it('renders character name', () => {
    render(<CharacterDetailsPanel />);
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });

  it('closes on close button click', () => {
    render(<CharacterDetailsPanel />);
    fireEvent.click(screen.getByTestId('x-icon'));
    expect(mockClosePanel).toHaveBeenCalled();
  });
});
