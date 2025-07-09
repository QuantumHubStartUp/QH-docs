import { useAtom } from "jotai";
import { historyLinksAtom } from "../store/history-links.store";
import { IHistoryLink } from "@entities/history-links.entities";


/*
@description: Интерфейс для добавления элементов в историю просмотра
@returns: push - функция для добавления элемента в историю
*/
export const useHistoryLinksPush = () => {
    const [historyLinks, setHistoryLinks] = useAtom(historyLinksAtom);
    

    const push = (link: IHistoryLink) => {
        if (!link) return
        if (historyLinks.length > 3) {
            historyLinks.shift();
        }
        setHistoryLinks((prev) => [link, ...prev]);
        
    };

    return [
        push
    ];
}