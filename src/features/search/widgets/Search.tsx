
import { searchValueAtom } from "../store/search-value.store";
import { SearchField } from "../ux/SearchField"
import { SearchFounds } from "./SearchFounds"
import { useAtom } from "jotai";


export const Search: React.FC = () => {
    const [searchValue, _] = useAtom(searchValueAtom);
    
    return (
        <div>
            <SearchField />
            {
                searchValue.length > 0
                ?
                <SearchFounds />
                :
                null
            }
            
        </div>
    )
}