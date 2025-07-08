import { IFrequentLink } from "@/entities/frequent-links.entities";


export const oftenLinks: IFrequentLink[] = [
    {
        id: 1, 
        name: 'Что за проект ?',
        url: '/',
        image: "/frequent-links/1.jpg",
        description: "Информация о проекте и его развитии"
    },
    {
        id: 2, 
        name: 'Все репозитории проекта ?',
        url: '/about',
        image: "/frequent-links/2.png",
        description: "Ссылки и наводки на репозитории проекта, для анализа структуры проекта"
    },
    {
        id: 3, 
        name: 'Команда разработчиков ?',
        url: 'https://github.com/freyzan2006/qh-docs',
        image: "/frequent-links/3.png",
        description: "О разработчиках и их специализации"
    },
]