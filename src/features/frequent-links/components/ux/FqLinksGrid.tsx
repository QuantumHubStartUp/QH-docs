import { memo } from "react"

import { FqLinksCard } from "./FqLinksCard"
import { useAtomValue } from "jotai"
import { oftenLinksAtom } from "../../store/often-links.store"






export const FqLinksGrid = memo(() => {
    const oftenLinks = useAtomValue(oftenLinksAtom)
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            
            {
                oftenLinks.map((link) => (
                    <FqLinksCard key={`${link.id}-${link.name}`} {...link} />
                ))
            }
        </div>
    )
})