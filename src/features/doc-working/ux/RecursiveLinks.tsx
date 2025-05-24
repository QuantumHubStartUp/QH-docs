import { ILinkItem } from "@/entities/link.entities";

import { LinkUI } from "@/shared/ui/LinkUI";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import { useAtom } from "jotai";
import { isSidebarOpenAtom } from "../../../shared/store/side-bar.store";
import { shortNamePath } from "@/shared/utils/shortText.utils";



interface RecursiveLinksProps {
  links: ILinkItem[];
  openItems?: number[]; 
}

export const RecursiveLinks: React.FC<RecursiveLinksProps> = ({ links }) => {
    const [openIds, setOpenIds] = useState<number[]>([]);

    const [ , setIsSidebarOpen ] = useAtom(isSidebarOpenAtom)

    const toggleOpen = (id: number) => {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((openId) => openId !== id) : [...prev, id]
      );
    };

    
  
    return (
      <ul className="flex flex-col  gap-3 pl-2 pt-2">
        {links.map((link) => (
          <li key={link.id}>
            {link.url ? (
              <LinkUI onClick = { () => setIsSidebarOpen(false) } to={link.url} className="text-blue-400 hover:underline" title = {link.name}>
                {shortNamePath(link.name)}
              </LinkUI>
            ) : (
              <div className="flex flex-col gap-3">
                <div
                  onClick={() => toggleOpen(link.id)}
                  className="font-semibold cursor-pointer flex items-center justify-between select-none "
                >
                  {shortNamePath(link.name)}
                  <span className="ml-1 text-xs">
                    {openIds.includes(link.id) ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </div>
  
                <AnimatePresence initial={false}>
                  {openIds.includes(link.id) && link.children && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden pl-2"
                    >
                      <RecursiveLinks links={link.children} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };