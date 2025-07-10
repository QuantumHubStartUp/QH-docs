import { ILinkItem } from './link.entities';

export interface IHistoryLink extends ILinkItem {
  url: string | undefined;
}
