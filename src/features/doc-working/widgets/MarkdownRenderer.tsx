



import DOMPurify from "dompurify";
import { marked } from "marked";
import { useEffect, useState } from "react";
interface MarkdownRendererProps {
  markdownUrl: string; // путь к .md-файлу
}

// export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdownUrl }) => {

  
//     const [htmlContent, setHtmlContent] = useState<string>("");

//     useEffect(() => {
//         const fetchMd = async () => {
//             try {
//                 const res = await fetch(markdownUrl);
//                 const md = await res.text();
//                 const dirty = marked(md);
//                 const clean = DOMPurify.sanitize(dirty);
//                 setHtmlContent(clean);
//             } catch (error) {
//                 console.error("Ошибка загрузки Markdown:", error);
//             }
//         };

//         fetchMd();
//     }, [markdownUrl]);

//     if (!markdownUrl) return null;

//     return (
//         <div
//             className="prose prose-slate max-w-none"
//             dangerouslySetInnerHTML={{ __html: htmlContent }}
//         />
//     );
// };


export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdownUrl }) => {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    const fetchMd = async () => {
      try {
        const res = await fetch(markdownUrl);
        const md: string = await res.text();
        const dirty: string = await marked(md);
        const clean: string = DOMPurify.sanitize(dirty);
        setHtmlContent(clean);
      } catch (error) {
        console.error("Ошибка загрузки Markdown:", error);
      }
    };

    if (markdownUrl) {
      fetchMd();
    }
  }, [markdownUrl]);

  if (!markdownUrl) return null;

  return (
    <div
      className="prose prose-slate max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

