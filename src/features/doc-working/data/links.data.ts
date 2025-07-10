import { ILinkGroup } from '@entities/link.entities';

import { docWorkingService } from '../services/DocWorking.service';

/*
@description: берём все .md файлы в директории /src/assets/docs
*/
export const docs: Record<string, string> = import.meta.glob(`/src/assets/docs/**/*.md`, {
  eager: true,
  import: 'default',
});

export const linksData: ILinkGroup[] = [
  {
    id: 1,
    name: 'Навигация',
    links: [
      {
        id: 1,
        name: 'Главная',
        url: '/',
      },
      {
        id: 2,
        name: 'О нас',
        url: '/about',
      },
      {
        id: 3,
        name: 'Github Документация',
        url: 'https://github.com/freyzan2006/qh-docs',
      },
    ],
  },
  {
    id: 2,
    name: 'Документация',
    links: docWorkingService.generateLinks(Object.keys(docs)),
  },
];
