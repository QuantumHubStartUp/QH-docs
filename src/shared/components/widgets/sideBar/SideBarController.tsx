import { useAtom } from "jotai";


import { isSidebarOpenAtom } from "@/shared/store/side-bar.store";
import { MenuIcon, CrossIcon } from "@/shared/components/icons";
import { useCallback } from "react";



export const SideBarController: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);

    


    
    
    const toggleSidebar = useCallback(() => setIsSidebarOpen(prev => !prev), []);

    return (
        <button
            onClick={toggleSidebar}
        >
            {isSidebarOpen ? (
                <span className="text-gray-300 hover:cursor-pointer"><CrossIcon /></span>
            ) : (
                <span className="text-gray-300 hover:cursor-pointer"><MenuIcon /></span>
            )}
        </button>
    )
}