export type TSearchCopyItem = {
  id: number;
  name: string;
  url?: string;
  children?: TSearchCopyItem[];
};
