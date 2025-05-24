


import { useGetFileMd } from "../hooks/useGetFileMd.hook";



import { MarkdownRenderer } from './MarkdownRenderer';


export const DocRender = () => {
    const { normPath, fileName, mdPath } = useGetFileMd();
    
    return (
        <>
            <h1 className="text-3xl font-bold underline mb-4">{fileName}</h1>
            <p>{normPath}</p>

            {/* {content && (
                <div
                    className="prose prose-slate max-w-none"
                    dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
                />
            )} */}
            {/* <ReactMarkdown
                
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                
            >
                {content}
            </ReactMarkdown> */}

            {/* <MarkdownRenderer markdownUrl = { normPath } /> */}
            {/* markdownUrl="/README.md" */}
            {/* <MarkdownRender markdown={content} /> */}
            {mdPath && <MarkdownRenderer markdownUrl={mdPath} />}
        </>
    );
}