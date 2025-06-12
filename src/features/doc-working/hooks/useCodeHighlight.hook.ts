// hooks/useCodeHighlight.ts
import { useEffect } from 'react';
import { renderStyleCode } from '../utils/render-style-code.utils';

export function useCodeHighlight(htmlContent: string) {
  useEffect(() => {
    if (!htmlContent) return;
    const hljs = renderStyleCode();
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach((block) => hljs.highlightElement(block as HTMLElement));
  }, [htmlContent]);
}
