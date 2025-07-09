import { ELayoutCSS } from '@shared/types';

export const Footer: React.FC = () => {
  return (
    <footer
      className={`sticky top-0 left-0 right-0 ${ELayoutCSS.LEVEL_1} bg-[var(--color-muted)] text-[var(--color-text)] dark:bg-[var(--color-bg)] dark:text-[var(--color-text)] shadow-md min-h-[60px] flex items-center justify-between p-4`}
    >
      <p className="text-center">© 2025 QH docs</p>
      <p className="text-center">version 0.0.1</p>
    </footer>
  );
};
