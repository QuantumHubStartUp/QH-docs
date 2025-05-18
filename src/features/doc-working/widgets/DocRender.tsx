

import ReactMarkdown from 'react-markdown';
import { useGetFileMd } from "../hooks/useGetFileMd.hook";

import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

export const DocRender = () => {
    const { normPath, content, fileName } = useGetFileMd();

    return (
        <>
            <h1 className="text-3xl font-bold underline mb-4">{fileName}</h1>
            <p>{normPath}</p>

            <ReactMarkdown
                
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                
            >
                {content}
            </ReactMarkdown>
        </>
    );
}