
import { Input } from "@/shared/components/ui/input"
import { useSetAtom } from "jotai";

import { searchValueAtom } from "../store/search-value.store";
import { useCallback, useEffect, useState } from "react";


export const SearchField: React.FC = () => {
    const setSearchValue = useSetAtom(searchValueAtom);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearchValue(inputValue);
        }, 300); 

        return () => clearTimeout(timeout);
    }, [inputValue, setSearchValue]);


    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value), []);

    return (
        <div className="flex items-center justify-center gap-3 w-full">
            <Input 
                value={inputValue}
                onChange={(e) => handleOnChange(e)}
                placeholder="Поиск по документации"
                className="w-full h-10"
            />
        </div>
    );
}

