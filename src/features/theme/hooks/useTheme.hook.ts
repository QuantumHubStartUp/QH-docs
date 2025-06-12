import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { stateThemeAtom } from '../store/state-theme.store';

export function useTheme() {
  const nowTheme = useAtomValue(stateThemeAtom);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', nowTheme === 'dark');
  }, [nowTheme]);
}
