import { ConfigApp } from '@config/config-app';
import { IFrequentLink } from '@entities/frequent-links.entities';

const host = ConfigApp.APP_URL;

export const oftenLinksData: IFrequentLink[] = [
  {
    id: 1,
    name: 'Что за проект ?',
    url: `${host}/docs/О_проекте/Обзор`,
    image: '/frequent-links/1.jpg',
    description: 'Информация о проекте и его развитии',
  },
  {
    id: 2,
    name: 'Все репозитории проекта ?',
    url: `${host}/docs/Техническая_документация/Архитектура/Репозитории`,
    image: '/frequent-links/2.png',
    description: 'Ссылки и наводки на репозитории проекта, для анализа структуры проекта',
  },
  {
    id: 3,
    name: 'Команда разработчиков ?',
    url: `${host}/docs/О_проекте/Команда`,
    image: '/frequent-links/3.jpg',
    description: 'О разработчиках и их специализации',
  },
  {
    id: 4,
    name: 'Техническое задание ?',
    url: `${host}/docs/О_проекте/Техническое-задания`,
    image: '/frequent-links/4.jpg',
    description: 'Техническое задание проекта',
  },
  {
    id: 5,
    name: 'Договор ?',
    url: `${host}/docs/О_проекте/Договор`,
    image: '/frequent-links/5.jpg',
    description: 'Договор на разработку проекта',
  },
  {
    id: 6,
    name: 'Архитектура проекта ?',
    url: `${host}/docs/Техническая_документация/Архитектура/Архитектура-проекта`,
    image: '/frequent-links/6.png',
    description: 'Архитектура проекта, frontend & backend',
  },
];
