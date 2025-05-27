// import { Container } from "../components/layout/Container";
// import { Footer } from "../components/ui/Footer";
// import { DarkScreen } from "../widgets/DarkScreen";
// import { Header } from "../widgets/Header";
// import { SideBar } from "../widgets/sideBar/SideBar";




// interface ILayoutProps extends React.HTMLProps<HTMLDivElement> {
//     children: React.ReactNode;
// }

// export const Layout: React.FC<ILayoutProps> = ({ children, ...props }) => {
//     return (
//         <div {...props} className="flex flex-col min-h-screen bg-linear-to-r from-cyan-500 to-gray-500 text-white">
//             <Header />
//             <div className="flex flex-row flex-1">
//                 <SideBar />
//                 <Container>
//                     { children }
//                 </Container>
//             </div>

//             <DarkScreen />
//             <Footer />
//         </div>
//     );
// }