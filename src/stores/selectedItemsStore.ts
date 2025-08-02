import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Character } from '../types/Character';

interface SelectedItemsState {
  selectedItems: Character[];
  addItem: (item: Character) => void;
  removeItem: (itemUrl: string) => void;
  isSelected: (itemUrl: string) => boolean;
  clearAll: () => void;
  getSelectedCount: () => number;
}

export const useSelectedItemsStore = create<SelectedItemsState>()(
  persist(
    (set, get) => ({
      selectedItems: [],

      addItem: (item: Character) => {
        const { selectedItems } = get();
        if (!selectedItems.find((selected) => selected.url === item.url)) {
          set({ selectedItems: [...selectedItems, item] });
        }
      },

      removeItem: (itemUrl: string) => {
        const { selectedItems } = get();
        set({
          selectedItems: selectedItems.filter((item) => item.url !== itemUrl),
        });
      },

      isSelected: (itemUrl: string) => {
        const { selectedItems } = get();
        return selectedItems.some((item) => item.url === itemUrl);
      },

      clearAll: () => {
        set({ selectedItems: [] });
      },

      getSelectedCount: () => {
        const { selectedItems } = get();
        return selectedItems.length;
      },
    }),
    {
      name: 'selected-items-storage',
    }
  )
);
