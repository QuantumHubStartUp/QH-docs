import { ILinkItem } from '@/entities/link.entities';
import { atom } from 'jotai';

export const searchValueAtom = atom('');

export const searchFoundAtom = atom<ILinkItem[]>();
