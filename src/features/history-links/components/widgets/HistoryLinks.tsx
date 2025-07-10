import { HistoryLinksClear } from '../ux/HistoryLinksClear';
import { HistoryLinksList } from '../ux/HistoryLinksList';

export const HistoryLinks: React.FC = () => {
  return (
    <section className="mx-auto py-8 w-full flex justify-center items-center flex-col gap-3 min-h-[300px]">
      <h2 className="text-3xl font-semibold mb-4">История ссылок</h2>
      <HistoryLinksList />
      <HistoryLinksClear />
    </section>
  );
};

export default HistoryLinks;
