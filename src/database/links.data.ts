
import { ILinkGroup, ILinkItem } from "@/entities/link.entities";



// export const linksData: ILinkGroup[] = [
//     {
//       id: 1,
//       name: "Цель проекта",
//       links: [
//         { id: 1, name: "Основное", url: "/docs/getting-started" },
//         {
//           id: 2,
//           name: "Основная информация",
//           url: "/docs/getting-started",
//         },
//         { id: 3, name: "Дополнительно", url: "/docs/components" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Документация",
//       links: [
//         { 
//           id: 1, 
//           name: "Frontend часть", 
//           children: [
//             { id: 1, name: "web", url: "/docs/getting-started" },
//             { id: 2, name: "mobile", url: "/docs/getting-started" },
//             { id: 3, name: "desktop", url: "/docs/getting-started" },
//           ],
//         },
//         {
//           id: 2,
//           name: "Backend часть",
//           children: [
//             { 
//               id: 1, 
//               name: "Microservice", 
//               children: [
//                 { id: 1, name: "Microservice 1", url: "/docs/getting-started" },
//                 { id: 2, name: "Microservice 2 22222222222222222222222222222222222222222222222222222222", url: "/docs/getting-started" },
//                 { id: 3, name: "Microservice 3", url: "/docs/getting-started" },
//               ] 
//             },
//             { 
//               id: 2, 
//               name: "Языки программирования", 
//               children: [
//                 { id: 1, name: "Java", url: "/docs/getting-started" },
//                 { id: 2, name: "Python", url: "/docs/getting-started" },
//                 { id: 3, name: "NodeJs", url: "/docs/getting-started" },
//               ] 
//             },
//           ],
//         },
//         { id: 3, name: "Deploy проекта", url: "/docs/components" },
//       ],
//     },
//     {
//         id: 3,
//         name: "Команда",
//         links: [
//             { id: 1, name: "Getting Started", url: "/docs/getting-started" },
//             {
//               id: 2,
//               name: "API Reference",
//               children: [
//                 { id: 1, name: "REST", url: "/docs/api/rest" },
//                 { id: 2, name: "GraphQL", url: "/docs/api/graphql" },
//               ],
//             },
//             { id: 3, name: "Components", url: "/docs/components" },
//         ]
//     },
//     {
//         id: 4,
//         name: "Микросервисы",
//         links: [
//             { id: 1, name: "Getting Started", url: "/docs/getting-started" },
//             {
//               id: 2,
//               name: "API Reference",
//               children: [
//                 { id: 1, name: "REST", url: "/docs/api/rest" },
//                 { id: 2, name: "GraphQL", url: "/docs/api/graphql" },
//               ],
//             },
//             { id: 3, name: "Components", url: "/docs/components" },
//         ]
//     },
//     {
//         id: 5,
//         name: "Технологии",
//         links: [
//             { id: 1, name: "Getting Started", url: "/docs/getting-started" },
//             {
//               id: 2,
//               name: "API Reference",
//               children: [
//                 { id: 1, name: "REST", url: "/docs/api/rest" },
//                 { id: 2, name: "GraphQL", url: "/docs/api/graphql" },
//               ],
//             },
//             { id: 3, name: "Components", url: "/docs/components" },
//         ]
//     },
// ];


// export const docs = import.meta.glob('./assets/docs/**/*.md', {
//   eager: true,
//   import: 'default',
// });


// // /src/assets/docs/api/rest.md → /docs/api/rest
// const toUrl = (path: string) =>
//   path
//     .replace('./assets/docs', '/docs')
//     .replace(/\.md$/, '');

// const toName = (path: string) => {
//   const parts = path.split('/');
//   const file = parts[parts.length - 1].replace('.md', '');
//   return file.charAt(0).toUpperCase() + file.slice(1);
// };

// export const linksData = Object.keys(docs).map((path, index) => ({
//   id: index + 1,
//   name: toName(path),
//   url: toUrl(path),
// }));

// console.log(linksData);









export const docs: Record<string, string> = import.meta.glob('/assets/docs/**/*.md', {
  eager: true,
  import: 'default',
});

const toUrl = (path: string) =>
  path
    .replace('/assets/docs', '/docs')
    .replace(/\.md$/, '');

const toName = (segment: string) =>
  segment.charAt(0).toUpperCase() + segment.slice(1);

type IRootItem = {
  
  __children: IRoot;
  __url: string | null;
  
}
interface IRoot {
  [key: string]: IRootItem
}



function buildTree(paths: string[]): ILinkItem[] {
  const root: IRoot = {}; // временная структура
  

  for (const path of paths) {
    const relativePath = path
      .replace('/assets/docs/', '')
      .replace(/\.md$/, '');
    const segments = relativePath.split('/');

    let current = root;

    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      if (!current[segment]) {
        current[segment] = { __children: {}, __url: null };
      }

      if (i === segments.length - 1) {
        current[segment].__url = toUrl(path);
      }

      current = current[segment].__children;
    }
  }

  // Рекурсивное преобразование временной структуры в ILink[]
  let idCounter = 1;

  function toLinks(obj: IRoot): ILinkItem[] {
    return Object.entries(obj).map(([key, value]: [string, IRootItem]) => {
      const children = toLinks(value.__children);
      const link: ILinkItem = {
        id: idCounter++,
        name: toName(key),
        ...(value.__url ? { url: value.__url } : {}),
        ...(children.length ? { children } : {}),
      };
      return link;
    });
  }


  console.log(root)
  return toLinks(root);
}


export const linksData: ILinkGroup[] = [
  {
    id: 1,
    name: 'Навигация',
    links: [
      {
        id: 1,
        name: 'Главная',
        url: '/',
      },
      {
        id: 2,
        name: 'О нас',
        url: '/about',
      },
      {
        id: 3,
        name: "Github Документация",
        url: "https://github.com/freyzan2006/qh-docs",
      }
    ],
  },
  {
    id: 2,
    name: 'Документация',
    links: buildTree(Object.keys(docs)),
  },
  
];







// [
//   {
//     id: 1,
//     name: "Автоимпортированные ссылки",
//     links: [
//       { id: 1, name: "Getting-started", url: "/docs/getting-started" },
//       {
//         id: 2,
//         name: "Api",
//         children: [
//           { id: 3, name: "Rest", url: "/docs/api/rest" },
//           { id: 4, name: "Graphql", url: "/docs/api/graphql" },
//         ]
//       },
//       {
//         id: 5,
//         name: "Frontend",
//         children: [
//           { id: 6, name: "Web", url: "/docs/frontend/web" },
//           { id: 7, name: "Mobile", url: "/docs/frontend/mobile" },
//         ]
//       }
//     ]
//   }
// ]
