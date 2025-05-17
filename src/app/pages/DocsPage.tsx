import { DocRender } from '@/features/doc-working';

import 'highlight.js/styles/atom-one-dark.css';

const DocsPage = () => {


  return (
    <main className='prose mx-auto'>
      <DocRender />
    </main>
  );
};

export default DocsPage;
