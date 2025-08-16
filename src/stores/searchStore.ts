import { create } from 'zustand';
//import { useShallow } from 'zustand/react/shallow';
import { debounce } from 'lodash-es';

interface SearchState {
  searchTerm: string;
  submittedTerm: string;
  shouldFetch: boolean;
  actions: {
    setSearchTerm: (term: string) => void;
    submitSearch: () => void;
    clearSearch: () => void;
  };
}

export const useSearchStore = create<SearchState>((set) => ({
  searchTerm: '',
  submittedTerm: '',
  shouldFetch: false,

  actions: {
    setSearchTerm: debounce((term: string) => {
      set({ searchTerm: term });
    }, 0), //temporary value for debugging

    submitSearch: () => {
      set((state) => ({
        submittedTerm: state.searchTerm,
        shouldFetch: true,
      }));
    },

    clearSearch: () => {
      set({ searchTerm: '', submittedTerm: '' });
    },
  },
}));

export const useSearchTerm = () => useSearchStore((state) => state.searchTerm);
export const useSubmittedTerm = () =>
  useSearchStore((state) => state.submittedTerm);
export const useSearchActions = () => useSearchStore((state) => state.actions);
