import type { ILinkGroup, ILinkItem } from "@/entities/link.entities";

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

    groups.forEach(group => {
        if (Array.isArray(group.links)) {
            group.links.forEach(traverse);
        }
    });

    return matches;
}