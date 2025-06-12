




import { isSidebarOpenAtom } from "../../../store/side-bar.store";
import { useAtom } from "jotai";
import { SideBarController } from "./SideBarController";
import { AnimatePresence, motion } from "framer-motion"; 

import { ELayoutCSS } from "@/shared/types/layout-css.enum";

import { Logo } from "@/shared/components/ui/Logo";
import { Search } from "@/features/search";

import { lazy, Suspense, useMemo } from 'react';
import { Loading } from "../../ui/Loading";
import { ThemeToggleBtn } from "@/features/theme";



const DocLinksRenderLazy = lazy(() => import('@/features/doc-working/widgets/DocLinksRender'));

export const SideBar = () => {

  const [isSidebarOpen] = useAtom(isSidebarOpenAtom);

  const DocLinksRenderMemo = useMemo(() => DocLinksRenderLazy, []);



  return (
    <aside>

    
    <AnimatePresence>
    {isSidebarOpen && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`fixed top-0 left-0 h-full w-[320px] flex flex-col text-white bg-black/80 backdrop-blur-md shadow-md ${ELayoutCSS.LEVEL_3}`} // <-- фиксированная позиция
        >
          <div className="flex items-center justify-between h-16 bg-gray-900 px-4 ">
            <Logo title="QH DOCS" />
            <ThemeToggleBtn />
            <SideBarController />
          </div>

          <nav className="flex flex-col p-4 overflow-y-auto gap-4 ">
            <Search />
            

            <Suspense fallback={<Loading />}>
              <DocLinksRenderMemo />
            </Suspense>
          </nav>
        </motion.div>
      )}
      </AnimatePresence>
      </aside>
  );
};

