import { CopyButton } from '@components/ux';
import { shortNamePath } from '@utils/shortText.utils';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { searchFoundAtom, searchValueAtom } from '../store/search-value.store';
import { collectUrls } from '../utils/search.utils';

export const SearchCopy: React.FC = () => {
  const searchValue = useAtomValue(searchValueAtom);
  const searchFound = useAtomValue(searchFoundAtom);

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

  const urls = useMemo(() => collectUrls(searchFound || [], baseUrl), [searchFound, baseUrl]);
  const joinedUrls = urls.join('\n\n');

  const shortLabel = useMemo(() => shortNamePath(searchValue), [searchValue]);

  return (
    <CopyButton
      text={joinedUrls}
      label={shortLabel || 'Скопировать ссылки'}
      className="flex items-center gap-2 disabled:cursor-not-allowed w-full disabled:opacity-30 disabled:hover:bg-gray-900"
      disabled={searchValue?.length === 0}
    />
  );
};
