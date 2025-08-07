export const queryKeys = {
  characters: (searchTerm: string, page: number = 1) =>
    ['characters', searchTerm, page] as const,
};
