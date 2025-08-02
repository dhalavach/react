import '@testing-library/jest-dom';
import { beforeEach, vi } from 'vitest';
//import { ThemeProvider, useTheme } from './contexts/ThemeContext';

//Mock theme

// beforeAll(() => {
//   vi.mock('ThemeProvider', () => {
//     useTheme: () => ({ theme: 'dark' });
//   });
// });
// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock fetch
global.fetch = vi.fn();

// Mock console methods to avoid noise in tests
global.console = {
  ...console,
  error: vi.fn(),
  warn: vi.fn(),
};

// Reset all mocks before each test
beforeEach(() => {
  vi.clearAllMocks();
  localStorageMock.getItem.mockReturnValue(null);
  //window.localStorage.clear();
});
