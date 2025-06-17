export const getFromLocalStorage = (key: string): unknown => {
  const item = localStorage.getItem(key);

  if (!item) return null;
  return JSON.parse(item);
};

export const setToLocalStorage =
  (key: string) =>
  (value: unknown): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

export const removeFromLocalStorage = (key: string) => (): void => {
  localStorage.removeItem(key);
};
