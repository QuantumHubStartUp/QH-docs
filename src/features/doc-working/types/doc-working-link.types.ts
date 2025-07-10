/*
@description: временная структура для генерации ссылок
*/
export type IRootItem = {
  __children: IRoot;
  __url: string | null;
};
export interface IRoot {
  [key: string]: IRootItem;
}
