


import { BackgroundGradient } from "@/shared/components/ui/background-gradient";
import { useGetFileMd } from "../hooks/useGetFileMd.hook";



import { MarkdownRenderer } from './MarkdownRenderer';



const DocRender = () => {
    const { normPath, fileName, mdPath } = useGetFileMd();
    
    return (
        <section className="">
            
            <BackgroundGradient>

            
            <h1 className="text-3xl font-bold underline mb-4">{fileName}</h1>
            <p>{normPath}</p>

         
            {mdPath && <MarkdownRenderer markdownUrl={mdPath} />}
       
            </BackgroundGradient>
        </section>
    );
}

export default DocRender;