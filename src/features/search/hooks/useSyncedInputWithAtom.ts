import { useDebouncedValue } from '@shared/hooks/useDebouncedValue.hook';
import { useEffect, useState } from 'react';

/**
 * Синхронизирует inputValue с jotai-атомом через debounce
 */
export const useSyncedInputWithAtom = <T>(atomValue: T, setAtom: (val: T) => void, delay = 300) => {
  const [inputValue, setInputValue] = useState(() => atomValue);
  const debouncedInput = useDebouncedValue(inputValue, delay);

  useEffect(() => {
    if (atomValue !== inputValue) {
      setInputValue(atomValue);
    }
  }, [atomValue]);

  useEffect(() => {
    if (debouncedInput !== atomValue) {
      setAtom(debouncedInput);
    }
  }, [debouncedInput]);

  return [inputValue, setInputValue] as const;
};
