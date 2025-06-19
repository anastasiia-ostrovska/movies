import { type ChangeEvent, useEffect, useState } from 'react';

export const useDebouncedInput = (delay: number = 300) => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedInputValue, setDebouncedInputValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [delay, inputValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return { inputValue, debouncedInputValue, handleChange };
};
