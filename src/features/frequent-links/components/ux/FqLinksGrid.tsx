import { memo } from "react"

import { FqLinksCard } from "./FqLinksCard"
import { useAtomValue } from "jotai"
import { oftenLinksAtom } from "../../store/often-links.store"






export const FqLinksGrid = memo(() => {
    const oftenLinks = useAtomValue(oftenLinksAtom)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {
                oftenLinks.map((link) => (
                    <FqLinksCard key={`${link.id}-${link.name}`} {...link} />
                ))
            }
        </div>
    )
})