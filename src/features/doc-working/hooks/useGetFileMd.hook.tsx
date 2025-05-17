import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { findMdPath } from "../utils/findMd.utils";
import { useAtom } from "jotai";
import { contentAtom } from "../store/content-md.store";


export const useGetFileMd = () => {
    const location = useLocation();
    const [content, setContent] = useAtom(contentAtom);
    
    
    const relativePath = findMdPath(location);

    useEffect(() => {
        import(`@assets/${relativePath}.md?raw`)
        .then(module => setContent(module.default))
        .catch(() => setContent('Ошибка загрузки файла'));
    }, [relativePath]);

    return { relativePath, content };
}