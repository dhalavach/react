import { useState, useEffect } from 'react';

export function useLocalStorage(
  key: string,
  initialValue: string
): [string, (value: string) => void] {
  const [storedValue, setStoredValue] = useState<string>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ?? initialValue;
    } catch (err) {
      console.error(`Error accessing localStorage key "${key}":`, err);
      return initialValue;
    }
  });

  const setValue = (value: string) => {
    try {
      localStorage.setItem(key, value);
      setStoredValue(value);
    } catch (err) {
      console.error(`Error writing to localStorage key "${key}":`, err);
    }
  };

  useEffect(() => {
    try {
      const handleStorage = (event: StorageEvent) => {
        if (event.key === key && event.newValue !== null) {
          setStoredValue(event.newValue);
        }
      };
      window.addEventListener('storage', handleStorage);
      return () => window.removeEventListener('storage', handleStorage);
    } catch {
      // Do nothing if storage events aren't supported
    }
  }, [key]);

  return [storedValue, setValue];
}
