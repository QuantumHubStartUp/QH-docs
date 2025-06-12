// hooks/useMarkdownLoader.ts
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { useEffect, useState } from 'react';

export function useMarkdownLoader(markdownUrl: string): string {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchMd = async () => {
      try {
        const fixedUrl = markdownUrl.replace('/src/assets/docs', '/docs/docs');
        const res = await fetch(fixedUrl, { signal: controller.signal });
        const md = await res.text();
        const dirty = await marked(md);
        const clean = DOMPurify.sanitize(dirty);
        setHtmlContent(clean);
      } catch (error) {
        if ((error as Error)?.name !== 'AbortError') {
          console.error('Ошибка загрузки Markdown:', error);
        }
      }
    };

    if (markdownUrl) fetchMd();
    return () => controller.abort();
  }, [markdownUrl]);

  return htmlContent;
}
