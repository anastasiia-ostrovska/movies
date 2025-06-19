export const formatActors = (actors: string): string[] => {
  return actors
    .split(',')
    .map(name => name.trim().replace(/\s+/g, ' '))
    .filter(name => name.length > 0);
};
