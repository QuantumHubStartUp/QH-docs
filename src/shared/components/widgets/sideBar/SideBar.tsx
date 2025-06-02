




import { isSidebarOpenAtom } from "../../../store/side-bar.store";
import { useAtom } from "jotai";
import { SideBarController } from "./SideBarController";
import { AnimatePresence, motion } from "framer-motion"; 
// import { SideBarLinks } from "./SideBarLinks";
import { ELayoutCSS } from "@/shared/types/layout-css.enum";
import { DocLinksRender } from "@/features/doc-working";
import { Logo } from "@/shared/components/ui/Logo";
import { Search } from "@/features/search";




export const SideBar = () => {

  const [isSidebarOpen] = useAtom(isSidebarOpenAtom);

 



  return (
    <aside>

    
    <AnimatePresence>
    {isSidebarOpen && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`fixed top-0 left-0 h-full w-[300px] flex flex-col text-white bg-black/80 backdrop-blur-md shadow-md ${ELayoutCSS.LEVEL_3}`} // <-- фиксированная позиция
        >
          <div className="flex items-center justify-between h-16 bg-gray-900 px-4">
            <Logo title="QH DOCS" />
            <SideBarController />
          </div>

          <nav className="flex flex-col p-4 overflow-y-auto">
            <Search />
            <DocLinksRender />
          </nav>
        </motion.div>
      )}
      </AnimatePresence>
      </aside>
  );
};

