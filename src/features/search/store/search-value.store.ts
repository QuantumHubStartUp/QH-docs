import { ILinkItem } from '@entities/link.entities';
import { atom } from 'jotai';

import { atomWithStorage } from 'jotai/utils';

export const searchValueAtom = atomWithStorage<string>('search-value', '');

export const searchFoundAtom = atom<ILinkItem[]>();
