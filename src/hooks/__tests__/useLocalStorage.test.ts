import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';
import { describe, it, expect, beforeEach } from 'vitest';

describe('useLocalStorage', () => {
  const key = 'test-key';
  const initialValue = 'initial';

  beforeEach(() => {
    localStorage.clear();
  });

  it('should return initialValue if localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage(key, initialValue));
    expect(result.current[0]).toBe(initialValue);
  });

  // it('should return value from localStorage if present', () => {
  //   localStorage.setItem(key, 'stored-value');
  //   const { result } = renderHook(() => useLocalStorage(key, initialValue));
  //   expect(result.current[0]).toBe('stored-value');
  // });

  // it('should update localStorage and state when setValue is called', () => {
  //   const { result } = renderHook(() => useLocalStorage(key, initialValue));
  //   act(() => {
  //     result.current[1]('new-value');
  //   });
  //   expect(localStorage.getItem(key)).toBe('new-value');
  //   expect(result.current[0]).toBe('new-value');
  // });

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
