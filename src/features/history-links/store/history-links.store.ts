import { IHistoryLink } from '@entities/history-links.entities';
import { atomWithStorage } from 'jotai/utils';

export const historyLinksAtom = atomWithStorage<IHistoryLink[]>('history-links', []);
