import { ELayoutCSS } from '../../types/layout-css.enum';
import { Container } from '../layout/Container';
import { Logo } from '../ui/Logo';
import { SideBarController } from './sideBar/SideBarController';

export const Header: React.FC = () => {
  return (
    <header
      className={`sticky top-0 left-0 right-0 ${ELayoutCSS.LEVEL_2} bg-[var(--color-muted)] text-[var(--color-text)] dark:bg-[var(--color-bg)] dark:text-[var(--color-text)] shadow-md min-h-[50px]`}
    >
      <Container css="flex flex-row items-center justify-between p-4 gap-4 xl:flex-row ">
        <SideBarController />

        {/* <h1 className="text-2xl hidden xl:block ">Quantum Hub StartUp</h1> */}

        <span className="text-2xl hidden xl:block relative z-20 md:inline-block rounded-xl bg-blue-500/40 px-4 py-1 underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          Quantum Hub StartUp
        </span>

        <Logo title="QH DOCS" />
      </Container>
    </header>
  );
};
