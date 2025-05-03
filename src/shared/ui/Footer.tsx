import { ELayoutCSS } from "../types/layout-css.enum";


export const Footer: React.FC = () => {
    return (
        <footer className={`sticky top-0 left-0 right-0 ${ELayoutCSS.LEVEL_1} bg-black/70 backdrop-blur-md shadow-md min-h-[60px] flex items-center justify-between p-4`}> 
            <p className="text-center">© 2025 QH docs</p>
        </footer>
    );
}