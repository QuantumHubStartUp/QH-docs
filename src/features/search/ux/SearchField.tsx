import { Input } from "@/shared/components/ui/input"
import { useAtom } from "jotai";
import { useCallback } from "react";

import { searchValueAtom } from "../store/search-value.store";

export const SearchField: React.FC = () => {
    const [searchValue, setSearchValue] = useAtom(searchValueAtom);

    const handleOnChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value);
        },
        [setSearchValue]
    );

    return (
        <div className="flex items-center justify-center gap-3 w-full">
            <Input 
                value={searchValue}
                onChange={handleOnChange}
                placeholder="Поиск по документации"
                className="w-full h-10"
            />
        </div>
    );
};


