import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { useAtom } from "jotai";
import { SearchCheck } from "lucide-react"
import { searchValueAtom } from "../store/search-value.store";


export const SearchField: React.FC = () => {
    const [searchValue, setSearchValue] = useAtom(searchValueAtom);

    return (
        <div className="flex items-center justify-center">
            <Input 
                value={ searchValue }
                onChange={(e) => setSearchValue(e.target.value)} 
                placeholder="Поиск по документации" 
                className="w-full h-10" 
            />
            <Button><SearchCheck /></Button>
        </div>
    )
}

