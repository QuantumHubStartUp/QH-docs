import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { findMdPath } from "../utils/findMd.utils";

// import { contentAtom } from "../store/content-md.store";

import { docs } from "@/database/links.data";



export const useGetFileMd = () => {
  const location = useLocation();
  // const [content, setContent] = useAtom(contentAtom);
  const [fileName, setFileName] = useState<string | null>(null);
  const [mdPath, setMdPath] = useState<string | null>(null);


  const relativePath = findMdPath(location); // -> "/docs/api/rest"

    const normPath = decodeURIComponent(relativePath.replace('/docs', ''));
    useEffect(() => {
        // Декодируем путь и убираем префикс "/docs"
        

        // Ищем ключ в docs по декодированному пути
        const key = Object.keys(docs).find(k => decodeURIComponent(k).includes(normPath));

        if (key && docs[key]) {
            // setContent(docs[key]);
            setMdPath(key); 

            // Получаем имя файла из ключа (пути)
            const match = key.match(/([^/\\]+)\.md$/);
            if (match) {
            setFileName(match[1]);
            } else {
            setFileName(null);
            }
        } else {
            // setContent('Ошибка загрузки файла');
            
            setFileName(null);
            setMdPath(null);
        }
    }, [normPath]);

  return { normPath, fileName, mdPath };
};