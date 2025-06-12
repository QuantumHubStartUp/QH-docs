
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
// import typescript from "highlight.js/lib/languages/typescript";
// import json from "highlight.js/lib/languages/json";
// import bash from "highlight.js/lib/languages/bash";



// hljs.registerLanguage("javascript", javascript);
// hljs.registerLanguage("typescript", typescript);
// hljs.registerLanguage("json", json);
// hljs.registerLanguage("bash", bash);

// import { renderStyleCode } from "../utils/render-style-code.utils";




import "highlight.js/styles/dark.min.css"; // стиль можно поменять

// import DOMPurify from "dompurify";
// import { marked } from "marked";
// import { useEffect, useState } from "react";
import { useMarkdownLoader } from "../hooks/useMarkdownLoader.hook";
import { useCodeHighlight } from "../hooks/useCodeHighlight.hook";
import { useCopyButtons } from "../hooks/useCopyButtons.hook";

interface MarkdownRendererProps {
  markdownUrl: string; // путь к .md-файлу
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdownUrl }) => {



  const htmlContent = useMarkdownLoader(markdownUrl);
  useCodeHighlight(htmlContent);
  useCopyButtons(htmlContent);

  if (!markdownUrl) return null;

  return (
    <div
      className="prose prose-slate max-w-none text-[var(--color-text) dark:text-[var(--color-text)]"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

