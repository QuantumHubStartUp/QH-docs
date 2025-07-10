import { TreeArrowLeft, TreeArrowRight } from '@components/icons';
import { ILinkItem } from '@entities/link.entities';

import { LinkUI } from '@components/ui/LinkUI';
import { shortNamePath } from '@utils/shortText.utils';
import { AnimatePresence, motion } from 'framer-motion';

import { useCallback, useState } from 'react';

interface ILinkItemProps {
  id: number;
  name: string;
  url?: string;
  children?: ILinkItem[];
}

export const SearchFoundsItem: React.FC<ILinkItemProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickIsOpen = useCallback(() => setIsOpen((prev) => !prev), [setIsOpen]);

  if (props.children) {
    return (
      <li className="w-full">
        <button
          onClick={handleClickIsOpen}
          className={`text-left w-full flex flex-row cursor-pointer ${isOpen ? 'text-blue-400' : 'text-blue-300'} `}
        >
          {isOpen ? <TreeArrowRight /> : <TreeArrowLeft />}

          {props.name}
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pl-8 pt-2 w-full flex flex-col gap-2 overflow-hidden"
            >
              {props.children.map((link) => (
                <SearchFoundsItem key={`${link.id}-${link.name}`} {...link} />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    );
  }

  return (
    <li className="w-full">
      {props.url && (
        <LinkUI to={props.url} className="flex flex-col">
          <span>{props.name}</span>
          <span className="text-xs text-gray-400">{shortNamePath(props.url)}</span>
        </LinkUI>
      )}
    </li>
  );
};
