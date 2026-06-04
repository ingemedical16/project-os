'use client';

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

type UseLocalStorageReturn<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): UseLocalStorageReturn<T> {
  const [storedValue, setStoredValue] =
    useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);

      if (item !== null) {
        setStoredValue(JSON.parse(item) as T);
      }
    } catch (error) {
      console.error(
        `Error reading localStorage key "${key}"`,
        error,
      );
    }
  }, [key]);

  const setValue: Dispatch<SetStateAction<T>> = (value) => {
    try {
      setStoredValue((currentValue) => {
        const valueToStore =
          value instanceof Function
            ? value(currentValue)
            : value;

        window.localStorage.setItem(
          key,
          JSON.stringify(valueToStore),
        );

        return valueToStore;
      });
    } catch (error) {
      console.error(
        `Error setting localStorage key "${key}"`,
        error,
      );
    }
  };

  return [storedValue, setValue];
}