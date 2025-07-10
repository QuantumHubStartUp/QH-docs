import { RecursiveLinks } from '../ux/RecursiveLinks';

import { useAtom } from 'jotai';
import { linkAtom, openGroupsAtom } from '../store/link.store';

import { ArrowDownIcon, ArrowUpIcon } from '@components/icons';
import { ILinkGroup } from '@entities/link.entities';
import { AnimatePresence, motion } from 'framer-motion';

const DocLinksRender = () => {
  const [linkState] = useAtom(linkAtom);
  const [openGroups, setOpenGroups] = useAtom(openGroupsAtom);

  const toggleGroup = (id: number) => {
    setOpenGroups((prev) =>
      prev.includes(id) ? prev.filter((groupId) => groupId !== id) : [...prev, id],
    );
  };

  return (
    <>
      {linkState.links.map((linkGroup: ILinkGroup) => (
        <div key={linkGroup.id} className="mb-4">
          <h2
            onClick={() => toggleGroup(linkGroup.id)}
            className="text-lg font-semibold text-gray-300 mb-2 cursor-pointer select-none flex items-center justify-between"
          >
            {linkGroup.name}
            <span className="ml-2">
              {openGroups.includes(linkGroup.id) ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </span>
          </h2>

          <AnimatePresence initial={false}>
            {openGroups.includes(linkGroup.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden text-gray-300"
              >
                <RecursiveLinks links={linkGroup.links} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
};

export default DocLinksRender;
