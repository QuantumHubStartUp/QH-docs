import { lazy, Suspense } from 'react';

import { Loading } from '@components/ui/Loading';


const HereLazy = lazy(() => import('./components/Here'));
const FqLinksLazy = lazy(() => import('@features/frequent-links/components/widgets/FqLinks'));
const HistoryLinksLazy = lazy(() => import('@features/history-links/components/widgets/HistoryLinks'));

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <Suspense fallback={<Loading />}>
        <HereLazy />
      </Suspense>

      <Suspense fallback ={<Loading />}>
        <HistoryLinksLazy />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <FqLinksLazy />
      </Suspense>


    </main>
  );
};

export default HomePage;
