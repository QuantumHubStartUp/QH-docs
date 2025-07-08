import { ILinkItem } from "./link.entities";



export interface IFrequentLink extends ILinkItem {
    url: string;
    image: string;
    description: string;
}