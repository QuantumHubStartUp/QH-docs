
import { SideBarController } from "@/features/sideBar";
import { Logo } from "../ui/Logo";
import { ELayoutCSS } from "../types/layout-css.enum";
import { Container } from "../layout/Container";




export const Header: React.FC = () => {
    return (
        <header className={`sticky top-0 left-0 right-0 ${ELayoutCSS.LEVEL_1} bg-black/70 backdrop-blur-md shadow-md min-h-[50px]`}>  
            <Container css = "flex flex-row items-center justify-between p-4 gap-4 xl:flex-row">
                <SideBarController />
                
                <h1 className="text-2xl hidden xl:block ">Quantum Hub StartUp</h1>
                <Logo title="QH DOCS" />
            </Container>
        </header>
    );
}