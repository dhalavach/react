import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

interface PaginationState {
  currentPage: number;
  searchTerm: string;
  totalPages: number;
  totalCount: number;
  actions: {
    setCurrentPage: (page: number) => void;
    setSearchTerm: (term: string) => void;
    resetPagination: () => void;
    updatePaginationData: (data: {
      totalPages: number;
      totalCount: number;
    }) => void;
  };
}

export const usePaginationStore = create<PaginationState>((set) => ({
  currentPage: 1,
  searchTerm: '',
  totalPages: 1,
  totalCount: 0,

  actions: {
    setCurrentPage: (page) =>
      set((state) => (state.currentPage === page ? {} : { currentPage: page })),
    setSearchTerm: (term) =>
      set((state) =>
        state.searchTerm === term ? {} : { searchTerm: term, currentPage: 1 }
      ),
    resetPagination: () => set({ currentPage: 1, searchTerm: '' }),

    updatePaginationData: (data) =>
      set((state) => ({
        ...state,
        totalPages: data.totalPages,
        totalCount: data.totalCount,
      })),
  },
}));

export const useCurrentPage = () =>
  usePaginationStore(useShallow((state) => state.currentPage));
export const useSearchTerm = () =>
  usePaginationStore(useShallow((state) => state.searchTerm));
export const usePaginationData = () =>
  usePaginationStore(
    useShallow((state) => ({
      totalPages: state.totalPages,
      totalCount: state.totalCount,
    }))
  );
export const usePaginationActions = () =>
  usePaginationStore((state) => state.actions);
