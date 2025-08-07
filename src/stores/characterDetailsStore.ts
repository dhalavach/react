import { create } from 'zustand';
import type { Character } from '../types/Character';

interface CharacterDetailsState {
  character: Character | null;
  isOpen: boolean;
  openPanel: (character: Character) => void;
  closePanel: () => void;
}

export const useCharacterDetailsStore = create<CharacterDetailsState>(
  (set) => ({
    character: null,
    isOpen: false,
    openPanel: (character) => set({ character, isOpen: true }),
    closePanel: () => set({ character: null, isOpen: false }),
  })
);
