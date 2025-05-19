import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { findMdPath } from "../utils/findMd.utils";
import { useAtom } from "jotai";
import { contentAtom } from "../store/content-md.store";

import { docs } from "@/database/links.data";

// export const useGetFileMd = () => {
//     const location = useLocation();
//     const [content, setContent] = useAtom(contentAtom);
    
    
//     const relativePath = findMdPath(location);

//     useEffect(() => {
//         import(`@assets/${relativePath}.md?raw`)
//         .then(module => setContent(module.default))
//         .catch(() => setContent('Ошибка загрузки файла'));
//     }, [relativePath]);

//     return { relativePath, content };
// }

export const useGetFileMd = () => {
  const location = useLocation();
  const [content, setContent] = useAtom(contentAtom);
  const [fileName, setFileName] = useState<string | null>(null);

  const relativePath = findMdPath(location); // -> "/docs/api/rest"

//   useEffect(() => {
//     const key = Object.keys(docs).find((k) =>
//       k.includes(relativePath.replace('/docs', ''))
//     );

    
  

//     if (key && docs[key]) {
//       setContent(docs[key]);
        
//       // Получить имя файла
//       const match = key.match(/([^/\\]+)\.md$/);
//       if (match) {
//         setFileName(match[1]); // "rest"
//       } else {
//         setFileName(null);
//       }
//     } else {
//       setContent('Ошибка загрузки файла');
//       setFileName(null);
//     }
//   }, [relativePath]);


    const normPath = decodeURIComponent(relativePath.replace('/docs', ''));
    useEffect(() => {
    // Декодируем путь и убираем префикс "/docs"
        

        // Ищем ключ в docs по декодированному пути
        const key = Object.keys(docs).find(k => decodeURIComponent(k).includes(normPath));

        if (key && docs[key]) {
            setContent(docs[key]);

            // Получаем имя файла из ключа (пути)
            const match = key.match(/([^/\\]+)\.md$/);
            if (match) {
            setFileName(match[1]);
            } else {
            setFileName(null);
            }
        } else {
            setContent('Ошибка загрузки файла');
            setFileName(null);
        }
    }, [normPath, setContent]);

  return { normPath, content, fileName };
};