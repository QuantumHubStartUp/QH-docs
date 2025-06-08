
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
  // const [htmlContent, setHtmlContent] = useState<string>("");
   
  // // для загрузки
  // useEffect(() => {
  //   const controller = new AbortController();

  //   const fetchMd = async () => {
  //     try {
  //       const fixMarkdownUrl = markdownUrl.replace('/src/assets/docs', '/docs/docs')
  //       const res = await fetch(fixMarkdownUrl);
  //       const md: string = await res.text();
  //       const dirty: string = await marked(md);
  //       const clean: string = DOMPurify.sanitize(dirty);
  //       setHtmlContent(clean);
  //     } catch (error) {
  //       console.error("Ошибка загрузки Markdown:", error);
  //     }
  //   };

    
  //   fetchMd();
    
  //   return () => controller.abort();
  // }, [markdownUrl]);

  

  // // для синтаксиса стилизации
  // useEffect(() => {
  //   const hljs = renderStyleCode();
  //   const codeBlocks = document.querySelectorAll("pre code");
  //   codeBlocks.forEach((block) => hljs.highlightElement(block as HTMLElement));
  // }, [htmlContent]);

  


  // // для копирования
  // useEffect(() => {
  //   const preBlocks = document.querySelectorAll("pre");
  //   const addedButtons: HTMLElement[] = [];

  //   preBlocks.forEach((block) => {
  //     if (!block.querySelector(".copy-btn")) {
  //       const button = document.createElement("button");
  //       button.textContent = "📋 Copy";
  //       button.className = "copy-btn";
  //       button.style.cssText = "position: absolute; right: 1rem; top: 0.5rem; cursor: pointer;";
  //       button.onclick = () => {
  //         navigator.clipboard.writeText(block.innerText);
  //         button.textContent = "Copied!";
  //         const timeout = setTimeout(() => {
  //           button.textContent = "📋 Copy";
  //         }, 500);
  //         button.dataset.timeoutId = timeout.toString();
  //       };
  //       block.style.position = "relative";
  //       block.appendChild(button);
  //       addedButtons.push(button);
  //     }
  //   });

  //   return () => {
  //     addedButtons.forEach((btn) => {
  //       const id = btn.dataset.timeoutId;
  //       if (id) clearTimeout(parseInt(id));
  //       btn.remove();
  //     });
  //   };
  // }, [htmlContent]);


  const htmlContent = useMarkdownLoader(markdownUrl);
  useCodeHighlight(htmlContent);
  useCopyButtons(htmlContent);

  if (!markdownUrl) return null;

  return (
    <div
      className="prose prose-slate max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

