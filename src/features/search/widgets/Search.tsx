
import { searchValueAtom } from "../store/search-value.store";
import { SearchField } from "../ux/SearchField"

import { useAtom } from "jotai";
import { SearchResults } from "./SearchResults";


export const Search: React.FC = () => {
    const [searchValue] = useAtom(searchValueAtom);
    
    return (
        <div className = "p-3 w-full flex flex-col items-center gap-3 bg-blue-300/10 backdrop-blur-md shadow-md rounded-xl">
            <SearchField />
            <hr className="w-full text-blue-500" />
            {searchValue.length > 0 && <SearchResults />}
        </div>
    )
}