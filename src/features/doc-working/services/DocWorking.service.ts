import { ILinkItem } from '@entities/link.entities';
import { IRoot, IRootItem } from '../types/doc-working-link.types';
import { toName, toUrl } from '../utils/generate-links.utils';

interface IDocWorkingService {
  /*
    @description: генерация ссылок, на основе .md файлов
    @returns: ILinkItem[]
    */
  generateLinks(paths: string[]): ILinkItem[];
}

class DocWorkingService implements IDocWorkingService {
  public generateLinks(paths: string[]): ILinkItem[] {
    const root: IRoot = {};

    for (const path of paths) {
      const relativePath = path.replace('/src/assets/docs/', '').replace(/\.md$/, '');
      const segments = relativePath.split('/');

      let current = root;

      for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        if (!current[segment]) {
          current[segment] = { __children: {}, __url: null };
        }

        if (i === segments.length - 1) {
          current[segment].__url = toUrl(path);
        }

        current = current[segment].__children;
      }
    }

    // Рекурсивное преобразование временной структуры в ILink[]
    let idCounter = 1;

    function toLinks(obj: IRoot): ILinkItem[] {
      return Object.entries(obj).map(([key, value]: [string, IRootItem]) => {
        const children = toLinks(value.__children);
        const link: ILinkItem = {
          id: idCounter++,
          name: toName(key),
          ...(value.__url ? { url: value.__url } : {}),
          ...(children.length ? { children } : {}),
        };

        return link;
      });
    }

    return toLinks(root);
  }
}

export const docWorkingService = new DocWorkingService();
