import { DarkScreen } from '../widgets/DarkScreen';
import { Header } from '../widgets/Header';
import { SideBar } from '../widgets/sideBar/SideBar';
import { Container } from './Container';
import { Footer } from './Footer';

interface ILayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] dark:bg-[var(--color-surface)] dark:text-[var(--color-text)]"
    >
      <Header />
      <div className="flex flex-row flex-1 mt-5">
        <SideBar />
        <Container>{children}</Container>
      </div>

      <DarkScreen />
      <Footer />
    </div>
  );
};
