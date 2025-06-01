import { MarkdownRenderer } from "@/features/doc-working";
import { LinkUI } from "@/shared/components/ui/LinkUI";



const AboutPage = () => {
    return (
        <main>
            
            <MarkdownRenderer markdownUrl = "/about.md"  />
            <LinkUI to={"/docs/О%20проекте/Обзор"}>
                Введение
            </LinkUI>
        </main>
    )
}

export default AboutPage;