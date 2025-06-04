import { useAtom } from "jotai";
import { searchValueAtom } from "../store/search-value.store";
import { searchByName } from "../utils/search.utils"
import { SearchFoundsItem } from "../ux/SearchFoundsItem"
import { linkAtom } from "@/features/doc-working";

import { useMemo } from "react";



export const SearchResults: React.FC = () => {
    const [searchValue] = useAtom(searchValueAtom);
    const [linkState] = useAtom(linkAtom);

    const filteredLinks = useMemo(() => {
        return searchByName(linkState.links, searchValue);
    }, [linkState.links, searchValue]);


    return (
        <ul className="divide-y flex flex-col gap-3 items-center w-full overflow-y-auto">
            { filteredLinks.map((link) => (
                <SearchFoundsItem key={`${link.id}-${link.name}`} {...link} />
            ))}
        </ul>
    )
}