import { FqLinksGrid } from '../ux/FqLinksGrid';

export const FqLinks: React.FC = () => {
  return (
    <section className="mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-4">Быстрые ссылки</h2>

      <FqLinksGrid />
    </section>
  );
};

export default FqLinks;
