export const toUrl = (path: string): string | null => {
  return path
    .replace('/src/assets/docs', '/docs')
    .replace(/\.md$/, '')
    .replace(/\s+/g, '-')
    .replace(/\s+/g, '_');
};

export const toName = (segment: string) => segment.charAt(0).toUpperCase() + segment.slice(1);
