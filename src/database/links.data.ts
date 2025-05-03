import { ILinkGroup } from "@/entities/link.entities";



export const linksData: ILinkGroup[] = [
    {
      id: 1,
      name: "Цель проекта",
      links: [
        { id: 1, name: "Основное", url: "/docs/getting-started" },
        {
          id: 2,
          name: "API Reference",
          children: [
            { id: 1, name: "REST", url: "/docs/api/rest" },
            { id: 2, name: "GraphQL", url: "/docs/api/graphql" },
          ],
        },
        { id: 3, name: "Components", url: "/docs/components" },
      ],
    },
    {
      id: 2,
      name: "Документация",
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