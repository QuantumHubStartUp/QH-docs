import { historyLinksAtom } from '@features/history-links/store/history-links.store';
import { useAtomValue } from 'jotai';
import { HistoryLinksItem } from '../ui/HistoryLinksItem';

export const HistoryLinksList: React.FC = () => {
  const historyLinks = useAtomValue(historyLinksAtom);

  return (
    <div className="flex flex-row justify-center items-center gap-3 flex-wrap w-full">
      {historyLinks.length === 0 ? (
        <div className="text-center">История пуста</div>
      ) : (
        historyLinks.map((link, index) => (
          <HistoryLinksItem key={`${link.id}-${link.name}`} link={link} index={index} />
        ))
      )}
    </div>
  );
};
