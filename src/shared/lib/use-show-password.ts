import { type MouseEventHandler, useState } from 'react';

export const useShowPassword = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault();
    setIsVisible(isVisible => !isVisible);
  };

  const type = isVisible ? 'text' : 'password';

  return { type, isVisible, toggleVisibility };
};
