import { externalLinks, PATHS } from '@/config/paths-app.data';
import { LinkUI } from '../ui/LinkUI';

export const Menu = () => {
  return (
    <menu className="flex flex-row gap-2 flex-wrap gap-3 items-center justify-center">
      <li>
        <LinkUI to={PATHS.home.path} className="text-blue-400 hover:underline">
          Главная
        </LinkUI>
      </li>
      <li>
        <LinkUI to={PATHS.about.path} className="text-blue-400 hover:underline">
          О нас
        </LinkUI>
      </li>
      <li>
        <LinkUI
          target="_blank"
          to={externalLinks.qhDocsGitHub.url}
          className="text-blue-400 hover:underline"
        >
          {externalLinks.qhDocsGitHub.name}
        </LinkUI>
      </li>
    </menu>
  );
};
