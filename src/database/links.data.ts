import { ILinkGroup } from "@/entities/link.entities";



export const linksData: ILinkGroup[] = [
    {
      id: 1,
      name: "Цель проекта",
      links: [
        { id: 1, name: "Основное", url: "/docs/getting-started" },
        {
          id: 2,
          name: "Основная информация",
          url: "/docs/getting-started",
        },
        { id: 3, name: "Дополнительно", url: "/docs/components" },
      ],
    },
    {
      id: 2,
      name: "Документация",
      links: [
        { 
          id: 1, 
          name: "Frontend часть", 
          children: [
            { id: 1, name: "web", url: "/docs/getting-started" },
            { id: 2, name: "mobile", url: "/docs/getting-started" },
            { id: 3, name: "desktop", url: "/docs/getting-started" },
          ],
        },
        {
          id: 2,
          name: "Backend часть",
          children: [
            { 
              id: 1, 
              name: "Microservice", 
              children: [
                { id: 1, name: "Microservice 1", url: "/docs/getting-started" },
                { id: 2, name: "Microservice 2 22222222222222222222222222222222222222222222222222222222", url: "/docs/getting-started" },
                { id: 3, name: "Microservice 3", url: "/docs/getting-started" },
              ] 
            },
            { 
              id: 2, 
              name: "Языки программирования", 
              children: [
                { id: 1, name: "Java", url: "/docs/getting-started" },
                { id: 2, name: "Python", url: "/docs/getting-started" },
                { id: 3, name: "NodeJs", url: "/docs/getting-started" },
              ] 
            },
          ],
        },
        { id: 3, name: "Deploy проекта", url: "/docs/components" },
      ],
    },
    {
        id: 3,
        name: "Команда",
        links: [
            { id: 1, name: "Getting Started", url: "/docs/getting-started" },
            {
              id: 2,
              name: "API Reference",
              children: [
                { id: 1, name: "REST", url: "/docs/api/rest" },
                { id: 2, name: "GraphQL", url: "/docs/api/graphql" },
              ],
            },
            { id: 3, name: "Components", url: "/docs/components" },
        ]
    },
    {
        id: 4,
        name: "Микросервисы",
        links: [
            { id: 1, name: "Getting Started", url: "/docs/getting-started" },
            {
              id: 2,
              name: "API Reference",
              children: [
                { id: 1, name: "REST", url: "/docs/api/rest" },
                { id: 2, name: "GraphQL", url: "/docs/api/graphql" },
              ],
            },
            { id: 3, name: "Components", url: "/docs/components" },
        ]
    },
    {
        id: 5,
        name: "Технологии",
        links: [
            { id: 1, name: "Getting Started", url: "/docs/getting-started" },
            {
              id: 2,
              name: "API Reference",
              children: [
                { id: 1, name: "REST", url: "/docs/api/rest" },
                { id: 2, name: "GraphQL", url: "/docs/api/graphql" },
              ],
            },
            { id: 3, name: "Components", url: "/docs/components" },
        ]
    },
];