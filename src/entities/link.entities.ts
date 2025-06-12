export interface ILinkItem {
  id: number;
  name: string;
  url?: string; // если это обычная ссылка
  children?: ILinkItem[]; // если это вложенное меню
}

export interface ILinkGroup {
  id: number;
  name: string;
  links: ILinkItem[];
}
