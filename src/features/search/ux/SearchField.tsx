import { Input } from "@/shared/components/ui/input"
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

import { searchValueAtom } from "../store/search-value.store";
import { useDebouncedValue } from "@/shared/hooks/useDebouncedValue.hook";




export const SearchField: React.FC = () => {
    const [searchValue, setSearchValue] = useAtom(searchValueAtom);
    const [inputValue, setInputValue] = useState(searchValue);

    const debouncedInput = useDebouncedValue(inputValue, 300);

    useEffect(() => {
        setSearchValue(debouncedInput);
    }, [debouncedInput, setSearchValue]);

     

    return (
        <div className="flex items-center justify-center gap-3 w-full">
            <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Поиск по документации"
                className="w-full h-10"
            />
        </div>
    );
};