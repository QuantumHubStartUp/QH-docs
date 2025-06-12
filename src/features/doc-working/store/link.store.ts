import { linksData } from '@/data/links.data';

import { atom } from 'jotai';

export const linkAtom = atom({
  links: linksData,
});

export const openGroupsAtom = atom<number[]>([]);

export const openIdsAtom = atom<number[]>([]);
