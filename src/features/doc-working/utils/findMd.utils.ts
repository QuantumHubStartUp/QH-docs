import { Location } from 'react-router-dom';

export const findMdPath = (location: Location<string>) => {
  return location.pathname.replace(/^\/docs\/?/, '') || 'getting-started';
};
