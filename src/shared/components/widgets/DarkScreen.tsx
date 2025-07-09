
import { useAtom } from 'jotai';
import { ELayoutCSS } from '../../types/layout-css.enum';
import { isSidebarOpenAtom } from '@store/side-bar.store';

export const DarkScreen: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useAtom(isSidebarOpenAtom);

  if (!isSidebarOpen) return null;

  return (
    <div
      onClick={() => setSidebarOpen(false)}
      className={`fixed top-0 left-0 right-0 bottom-0 bg-black/50 ${ELayoutCSS.LEVEL_2}`}
    ></div>
  );
};
