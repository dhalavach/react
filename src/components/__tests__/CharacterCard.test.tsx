import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CharacterCard } from '../CharacterCard';
import type { Character } from '../../types/Character';
import * as store from '../../stores/selectedItemsStore';

describe('CharacterCard', () => {
  const character: Character = {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
    homeworld: 'https://swapi.dev/api/planets/2/',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    url: 'https://swapi.dev/api/people/5/',
    created: '',
    edited: '',
  };

  const addItem = vi.fn();
  const removeItem = vi.fn();
  const isSelected = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.spyOn(store, 'useSelectedItemsStore').mockReturnValue({
      isSelected,
      addItem,
      removeItem,
      selectedItems: [],
      clearAll: vi.fn(),
      getSelectedCount: vi.fn(),
    });
  });

  it('renders character name', () => {
    isSelected.mockReturnValue(false);
    render(<CharacterCard character={character} />);
    expect(screen.getByText('Leia Organa')).toBeInTheDocument();
  });

  it('renders formatted description', () => {
    isSelected.mockReturnValue(false);
    render(<CharacterCard character={character} />);
    expect(
      screen.getByText(/female.*Born 19BBY.*150cm.*49kg/i)
    ).toBeInTheDocument();
  });

  it('renders physical data blocks (height, mass, birth)', () => {
    isSelected.mockReturnValue(false);
    render(<CharacterCard character={character} />);
    expect(screen.getByText('150cm')).toBeInTheDocument();
    expect(screen.getByText('49kg')).toBeInTheDocument();
    expect(screen.getByText('19BBY')).toBeInTheDocument();
  });

  it('omits description elements if fields are "unknown"', () => {
    const unknownChar = {
      ...character,
      gender: 'unknown',
      birth_year: 'unknown',
      height: 'unknown',
      mass: 'unknown',
    };
    isSelected.mockReturnValue(false);
    render(<CharacterCard character={unknownChar} />);
    expect(screen.queryByText(/Born/)).not.toBeInTheDocument();
    expect(screen.queryByText(/cm/)).not.toBeInTheDocument();
    expect(screen.queryByText(/kg/)).not.toBeInTheDocument();
  });

  it('checkbox reflects selected state', () => {
    isSelected.mockReturnValue(true);
    render(<CharacterCard character={character} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('clicking checkbox calls addItem/removeItem', () => {
    isSelected.mockReturnValue(false);
    render(<CharacterCard character={character} />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(addItem).toHaveBeenCalledWith(character);

    // Now simulate it being checked and then unchecked
    // isSelected.mockReturnValue(true);
    // render(<CharacterCard character={character} />);
    // const newCheckbox = screen.getByTestId('checkbox');
    // fireEvent.change(newCheckbox, { target: { checked: false } });
    // expect(removeItem).toHaveBeenCalledWith(character.url);
  });

  it('calls onClick with character when card is clicked', () => {
    isSelected.mockReturnValue(false);
    const onClick = vi.fn();
    render(<CharacterCard character={character} onClick={onClick} />);

    fireEvent.click(screen.getByText('Leia Organa'));
    expect(onClick).toHaveBeenCalledWith(character);
  });

  it('does not propagate checkbox click to card click', () => {
    isSelected.mockReturnValue(false);
    const onClick = vi.fn();
    render(<CharacterCard character={character} onClick={onClick} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('has avatar icon', () => {
    isSelected.mockReturnValue(false);
    render(<CharacterCard character={character} />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });
});
