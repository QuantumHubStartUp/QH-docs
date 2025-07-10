import { memo } from 'react';

import { useAtomValue } from 'jotai';
import { oftenLinksAtom } from '../../store/often-links.store';
import { FqLinksCard } from './FqLinksCard';

export const FqLinksGrid = memo(() => {
  const oftenLinks = useAtomValue(oftenLinksAtom);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {oftenLinks.map((link) => (
        <FqLinksCard key={`${link.id}-${link.name}`} {...link} />
      ))}
    </div>
  );
});
