import { useSetAtom } from 'jotai';
import { historyLinksAtom } from '../store/history-links.store';

export const useClearHistory = () => {
  const setHistoryLinks = useSetAtom(historyLinksAtom);
  const clear = () => {
    setHistoryLinks([]);
  };
  return [clear];
};
