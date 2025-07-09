import { BackgroundGradient } from '@components/ui/background-gradient';
import { useGetFileMd } from '../hooks/useGetFileMd.hook';

import { CopyButton } from '@components/ux';
import { shortNamePath } from '@utils/shortText.utils';
import { useMemo } from 'react';
import { MarkdownRenderer } from './MarkdownRenderer';

const DocRender = () => {
  const { normPath, fileName, mdPath } = useGetFileMd();

  const getFileName = useMemo(() => shortNamePath(normPath), [normPath]);

  return (
    <section className="">
      <BackgroundGradient>
        <h1 className="text-3xl font-bold underline mb-4">{fileName}</h1>
        <CopyButton text={window.location.href} label={getFileName} />
        <p>{normPath}</p>

        {mdPath && <MarkdownRenderer markdownUrl={mdPath} />}
      </BackgroundGradient>
    </section>
  );
};

export default DocRender;
