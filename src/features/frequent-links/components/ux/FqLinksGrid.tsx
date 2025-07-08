import { oftenLinks } from "../../data/often-links.data"
import { FqLinksCard } from "./FqLinksCard"





export const FqLinksGrid = () => {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {
                oftenLinks.map((link) => (
                    <FqLinksCard key={`${link.id}-${link.name}`} {...link} />
                ))
            }
        </div>
    )
}