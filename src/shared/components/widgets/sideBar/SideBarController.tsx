import { useAtom } from "jotai";


import { isSidebarOpenAtom } from "@/shared/store/side-bar.store";
import { MenuIcon, CrossIcon } from "@/shared/components/icons";
import { useCallback } from "react";



export const SideBarController: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);

    


    
    
    const toggleSidebar = useCallback(() => setIsSidebarOpen(prev => !prev), [setIsSidebarOpen]);

    return (
        <button
            className=" hover:cursor-pointer"
            onClick={toggleSidebar}
        >
            {isSidebarOpen ? (
                <span className=" hover:cursor-pointer"><CrossIcon /></span>
            ) : (
                <span className=" hover:cursor-pointer"><MenuIcon /></span>
            )}
        </button>
    )
}