import { describe, it, vi, beforeEach, expect, type Mock } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Character } from '../../types/Character';

// Props interface for the mock component
interface Props {
  character?: Character;
  onClick?: (character: Character) => void;
}

// Mocks before imports
vi.mock('../../stores/searchStore', () => ({
  useSearchTerm: vi.fn(),
}));

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

vi.mock('../../stores/characterDetailsStore', () => ({
  useCharacterDetailsStore: vi.fn(() => ({
    openPanel: vi.fn(),
  })),
}));

vi.mock('../../api/api', () => ({
  useCharacters: vi.fn(),
}));

vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual('@tanstack/react-query');
  return {
    ...actual,
    useQueryClient: vi.fn(() => ({
      refetchQueries: vi.fn().mockResolvedValue(undefined),
    })),
  };
});

// Mock CharacterCard component with default props to avoid TS errors
vi.mock('../CharacterCard', () => ({
  CharacterCard: (props: Props = {}) => {
    // Provide a full default character to satisfy all required fields
    const defaultCharacter: Character = {
      name: '',
      height: '',
      mass: '',
      hair_color: '',
      skin_color: '',
      eye_color: '',
      birth_year: '',
      gender: '',
      homeworld: '',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '',
      edited: '',
      url: '',
    };

    const { character = defaultCharacter, onClick } = props;

    return (
      <div
        data-testid="mock-character-card"
        onClick={() => onClick?.(character)}
      >
        {character.name}
      </div>
    );
  },
}));

// Imports AFTER mocks
import { useSearchTerm } from '../../stores/searchStore';
import {
  useCurrentPage,
  usePaginationActions,
  usePaginationData,
} from '../../stores/currentPageStore';
import { useCharacterDetailsStore } from '../../stores/characterDetailsStore';
import { useCharacters } from '../../api/api';
import { ResultsSection } from '../ResultsSection';
import { useQueryClient } from '@tanstack/react-query';

// Typed mocks assigned once:
const useSearchTermMock = useSearchTerm as unknown as Mock;
const useCurrentPageMock = useCurrentPage as unknown as Mock;
const usePaginationActionsMock = usePaginationActions as unknown as Mock;
const usePaginationDataMock = usePaginationData as unknown as Mock;
const useCharacterDetailsStoreMock =
  useCharacterDetailsStore as unknown as Mock;
const useCharactersMock = useCharacters as unknown as Mock;
const useQueryClientMock = useQueryClient as unknown as Mock;

describe('<ResultsSection />', () => {
  const updatePaginationData = vi.fn();
  const openPanel = vi.fn();
  const refetch = vi.fn();
  const mockRefetchQueries = vi.fn().mockResolvedValue(undefined);

  beforeEach(() => {
    vi.clearAllMocks();

    useSearchTermMock.mockReturnValue('Luke');
    useCurrentPageMock.mockReturnValue(1);
    usePaginationActionsMock.mockReturnValue({ updatePaginationData });
    usePaginationDataMock.mockReturnValue({
      totalPages: 1,
      totalCount: 1,
    });
    useCharacterDetailsStoreMock.mockReturnValue({ openPanel });
    useQueryClientMock.mockReturnValue({
      refetchQueries: mockRefetchQueries,
    });
  });

  it('renders loading state', () => {
    useCharactersMock.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
      refetch,
    });

    render(<ResultsSection />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('renders error state and retry button', () => {
    useCharactersMock.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
      refetch,
    });

    render(<ResultsSection />);
    expect(screen.getByText(/an error occurred/i)).toBeInTheDocument();
  });

  it('renders no results message', () => {
    useCharactersMock.mockReturnValue({
      data: { count: 0, results: [] },
      isLoading: false,
      isError: false,
      refetch,
    });

    render(<ResultsSection />);
    expect(screen.getByText(/no characters found/i)).toBeInTheDocument();
  });

  it('renders search results and calls updatePaginationData', () => {
    const character: Character = {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '',
      edited: '',
      url: 'https://swapi.dev/api/people/1/',
    };

    useCharactersMock.mockReturnValue({
      data: { count: 11, results: [character] },
      isLoading: false,
      isError: false,
      refetch,
    });

    render(<ResultsSection />);

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('(11 characters found)')).toBeInTheDocument();

    expect(updatePaginationData).toHaveBeenCalledWith({
      totalPages: 2,
      totalCount: 11,
    });
  });

  it('calls openPanel when character card is clicked', () => {
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
      created: '',
      edited: '',
      url: 'https://swapi.dev/api/people/5/',
    };

    useCharactersMock.mockReturnValue({
      data: { count: 1, results: [character] },
      isLoading: false,
      isError: false,
      refetch,
    });

    render(<ResultsSection />);
    fireEvent.click(screen.getByText('Leia Organa'));
    expect(openPanel).toHaveBeenCalledWith(character);
  });

  describe('Refresh button', () => {
    it('renders refresh button when there are results', () => {
      const character: Character = {
        name: 'Luke Skywalker',
        url: 'https://swapi.dev/api/people/1/',
        mass: '77',
        height: '172',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: '',
        edited: '',
      };

      useCharactersMock.mockReturnValue({
        data: { count: 1, results: [character] },
        isLoading: false,
        isError: false,
        refetch,
      });

      render(<ResultsSection />);
      expect(
        screen.getByRole('button', { name: /refresh/i })
      ).toBeInTheDocument();
    });

    it('calls refetchQueries when refresh button is clicked', async () => {
      const character: Character = {
        name: 'Luke Skywalker',
        url: 'https://swapi.dev/api/people/1/',
        mass: '77',
        height: '172',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: '',
        edited: '',
      };

      useCharactersMock.mockReturnValue({
        data: { count: 1, results: [character] },
        isLoading: false,
        isError: false,
        refetch,
      });

      render(<ResultsSection />);
      const refreshButton = screen.getByRole('button', { name: /refresh/i });
      fireEvent.click(refreshButton);

      expect(mockRefetchQueries).toHaveBeenCalled();
    });

    it('shows loading state while refreshing', async () => {
      const character: Character = {
        name: 'Luke Skywalker',
        url: 'https://swapi.dev/api/people/1/',
        mass: '77',
        height: '172',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: '',
        edited: '',
      };

      useCharactersMock.mockReturnValue({
        data: { count: 1, results: [character] },
        isLoading: false,
        isError: false,
        refetch,
      });

      mockRefetchQueries.mockImplementation(
        () => new Promise((resolve) => setTimeout(resolve, 100))
      );

      render(<ResultsSection />);
      const refreshButton = screen.getByRole('button', { name: /refresh/i });
      fireEvent.click(refreshButton);

      expect(screen.getByText('Refreshing...')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('shows success state after refresh completes', async () => {
      const character: Character = {
        name: 'Luke Skywalker',
        url: 'https://swapi.dev/api/people/1/',
        mass: '77',
        height: '172',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: '',
        edited: '',
      };

      useCharactersMock.mockReturnValue({
        data: { count: 1, results: [character] },
        isLoading: false,
        isError: false,
        refetch,
      });

      render(<ResultsSection />);
      const refreshButton = screen.getByRole('button', { name: /refresh/i });
      fireEvent.click(refreshButton);

      await waitFor(() => {
        expect(screen.getByText('Refreshed!')).toBeInTheDocument();
      });
    });
  });
});
