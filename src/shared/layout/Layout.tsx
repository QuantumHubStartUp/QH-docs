import { SideBar } from "@/features/sideBar";
import { Container } from "./Container";
import { Footer } from "../ui/Footer";
import { Header } from "../widgets/Header";
import { DarkScreen } from "../widgets/DarkScreen";


interface ILayoutProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children, ...props }) => {
    return (
        <div {...props} className="flex flex-col min-h-screen bg-linear-to-r from-cyan-500 to-gray-500 text-white">
            <Header />
            <div className="flex flex-row flex-1">
                <SideBar />
                <Container>
                    { children }
                </Container>
            </div>

            <DarkScreen />
            <Footer />
        </div>
    );
}