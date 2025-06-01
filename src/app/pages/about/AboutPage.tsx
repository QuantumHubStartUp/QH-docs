import { MarkdownRenderer } from "@/features/doc-working";



const AboutPage = () => {
    return (
        <main>
            
            <MarkdownRenderer markdownUrl = "/about.md"  />
            
        </main>
    )
}

export default AboutPage;