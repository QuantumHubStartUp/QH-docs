import type { ILinkGroup, ILinkItem } from '@entities/link.entities';
import { TSearchCopyItem } from '../types/search.type';

/**
 * Поиск элементов по name внутри массива ILinkGroup[]
 * @param groups массив групп ссылок
 * @param searchTerm строка для поиска
 * @returns массив найденных ILinkItem
 */
export function searchByName(groups: ILinkGroup[], searchTerm: string): ILinkItem[] {
  const matches: ILinkItem[] = [];

  function traverse(item: ILinkItem) {
    if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      matches.push(item);
    }

    if (Array.isArray(item.children)) {
      item.children.forEach(traverse);
    }
  }

  groups.forEach((group) => {
    if (Array.isArray(group.links)) {
      group.links.forEach(traverse);
    }
  });

  return matches;
}

/**
 * Форматирует TSearchCopyItem[] в строку для копирования
 * @param items массив TSearchCopyItem
 * @returns строка для копирования
 */
export const collectUrls = (items: TSearchCopyItem[], baseUrl: string): string[] => {
  return items.flatMap((item) => [
    ...(item.url ? [baseUrl + item.url] : []),
    ...(item.children ? collectUrls(item.children, baseUrl) : []),
  ]);
};
