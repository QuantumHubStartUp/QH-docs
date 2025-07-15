import { useDebouncedValue } from '@shared/hooks/useDebouncedValue.hook';
import { useEffect, useRef, useState } from 'react';

/**
 * Синхронизирует inputValue с jotai-атомом через debounce
 */
export const useSyncedInputWithAtom = <T>(atomValue: T, setAtom: (val: T) => void, delay = 300) => {
  const [inputValue, setInputValue] = useState<T>(atomValue);
  const debouncedInput = useDebouncedValue(inputValue, delay);
  const isUserInput = useRef(false); // флаг: ввод ли это от пользователя

  // Ставим флаг при ручном вводе
  const handleChange = (val: T) => {
    isUserInput.current = true;
    setInputValue(val);
  };

  // Синхронизируем с jotai после debounce
  useEffect(() => {
    if (isUserInput.current && debouncedInput !== atomValue) {
      setAtom(debouncedInput);
      isUserInput.current = false;
    }
  }, [debouncedInput, atomValue, setAtom]);

  // Обновляем inputValue, если atom обновлён извне (не пользователем)
  useEffect(() => {
    if (!isUserInput.current && atomValue !== inputValue) {
      setInputValue(atomValue);
    }
  }, [atomValue, inputValue]);

  return [inputValue, handleChange] as const;
};
