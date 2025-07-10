import { Input } from '@components/ui/input';
import { useAtom } from 'jotai';

import { useSyncedInputWithAtom } from '../hooks/useSyncedInputWithAtom';
import { searchValueAtom } from '../store/search-value.store';
import { SearchClear } from './SearchClear';

export const SearchField: React.FC = () => {
  const [searchValue, setSearchValue] = useAtom(searchValueAtom);
  const [inputValue, setInputValue] = useSyncedInputWithAtom(searchValue, setSearchValue);

  return (
    <div className="flex items-center justify-center gap-3 w-full">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Поиск по документации"
        className="w-full h-10"
      />
      <SearchClear />
    </div>
  );
};
