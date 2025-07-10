import { CrossIcon } from '@components/icons';
import { Button } from '@shared/components/ui/button';
import { useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { searchValueAtom } from '../store/search-value.store';

export const SearchClear: React.FC = () => {
  const clear = useSetAtom(searchValueAtom);

  const handlerClear = useCallback(() => {
    clear('');
  }, []);

  return (
    <Button onClick={handlerClear} className="cursor-pointer">
      <CrossIcon />
    </Button>
  );
};
