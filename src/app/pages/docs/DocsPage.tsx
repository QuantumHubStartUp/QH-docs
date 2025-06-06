

import { lazy, Suspense } from 'react';


import 'highlight.js/styles/atom-one-dark.css';
import { Loading } from '@/shared/components/ui/Loading';


const DocRenderLazy = lazy(() => import('@/features/doc-working/widgets/DocRender'));

const DocsPage = () => {


  return (
    <main className='prose mx-auto markdown-body min-h-screen'>
        <Suspense fallback={<Loading />}>
          <DocRenderLazy />
        </Suspense>
    </main>
  );
};

export default DocsPage;
