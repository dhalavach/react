import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';
import { describe, it, expect, beforeEach } from 'vitest';

const key = 'starwars-search-term';
const initialValue = '';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return initialValue if localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage(key, initialValue));
    expect(result.current[0]).toBe(initialValue);
  });

  it('should update state when storage event fires', () => {
    const { result } = renderHook(() => useLocalStorage(key, initialValue));
    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key,
          newValue: 'external-value',
        })
      );
    });
    expect(result.current[0]).toBe('external-value');
  });

  it('should not update state if storage event key does not match', () => {
    const { result } = renderHook(() => useLocalStorage(key, initialValue));
    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: 'other-key',
          newValue: 'other-value',
        })
      );
    });
    expect(result.current[0]).toBe(initialValue);
  });
});
