import { searchValueAtom } from '../store/search-value.store';
import { SearchField } from '../ux/SearchField';

import { useAtom } from 'jotai';
import { SearchResults } from './SearchResults';

import { AnimatePresence, motion } from 'framer-motion';
import { SearchCopy } from '../ux/SearchCopy';

export const Search: React.FC = () => {
  const [searchValue] = useAtom(searchValueAtom);

  return (
    <div className="p-3 w-full flex flex-col items-center gap-3 bg-blue-300/10 backdrop-blur-md shadow-md rounded-xl">
      <SearchField />
      <SearchCopy />
      <hr className="w-full text-blue-500" />

      <AnimatePresence>
        {searchValue.length > 0 && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <SearchResults />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
