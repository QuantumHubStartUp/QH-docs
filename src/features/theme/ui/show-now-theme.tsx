import { DarkThemeIcon, LightThemeIcon } from '@/shared/components/icons';
import { ThemeType } from '../types/theme-type';

export const ShowNowTheme: React.FC<{ nowTheme: ThemeType }> = ({ nowTheme }) => (
  <>{nowTheme === 'light' ? <DarkThemeIcon /> : <LightThemeIcon />}</>
);
