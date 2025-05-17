

import ReactMarkdown from 'react-markdown';
import { useGetFileMd } from "../hooks/useGetFileMd.hook";

import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

export const DocRender = () => {
    const { relativePath, content } = useGetFileMd();

    return (
        <>
            <h1 className="text-3xl font-bold underline mb-4">{relativePath}</h1>
            <ReactMarkdown
                
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                
            >
                {content}
            </ReactMarkdown>
        </>
    );
}