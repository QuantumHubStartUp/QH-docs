import { MarkdownRenderer } from '@features/doc-working';
import { LinkUI } from '@components/ui/LinkUI';
import { Loading } from '@components/ui/Loading';
import { Suspense } from 'react';

const AboutPage = () => {
  return (
    <main className="flex flex-col justify-center items-center border-2 rounded-xl p-3 text-[var(--color-text) dark:text-[var(--color-text)] bg-[var(--color-bg)] dark:bg-[var(--color-bg)] border-[var(--color-border)]">
      <Suspense fallback={<Loading />}>
        <MarkdownRenderer markdownUrl="/about.md" />
        <LinkUI to={'/docs/О%20проекте/Обзор'}>Введение</LinkUI>
      </Suspense>
    </main>
  );
};

export default AboutPage;
