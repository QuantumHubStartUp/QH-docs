import { IHistoryLink } from "@entities/history-links.entities";
import { CardBody, CardContainer, CardItem } from "@shared/components/ui/3d-card";
import { memo } from "react";

interface IProps {
    link: IHistoryLink
    index: number
}

export const HistoryLinksItem: React.FC<IProps> = memo(({ link, index }) => {
    return (
               <CardContainer className="inter-var max-w-[26rem] w-full ">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            { index + 1 }. Тема: { link.name }
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as="a"
                            href={ link.url }
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            Подробнеи →
                        </CardItem>
        
                    
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            { link.name }
                        </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
    );
})