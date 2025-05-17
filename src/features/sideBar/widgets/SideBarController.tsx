import { useAtom } from "jotai";

import { Menu, X } from "lucide-react";
import { isSidebarOpenAtom } from "../store/side-bar.store";



export const SideBarController: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);


    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };
    
    

    return (
        <button
            onClick={toggleSidebar}
        >
            {isSidebarOpen ? (
                <span className="text-gray-300 hover:cursor-pointer"><X /></span>
            ) : (
                <span className="text-gray-300 hover:cursor-pointer"><Menu /></span>
            )}
        </button>
    )
}