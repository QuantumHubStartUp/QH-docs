
import { ILinkGroup, ILinkItem } from "@/entities/link.entities";








// export const pathAssetsOfDocs = "/src/assets/docs";




export const docs: Record<string, string> = import.meta.glob(`/src/assets/docs/**/*.md`, {
  eager: true,
  import: 'default',
});

export const docsUrls: Record<string, string> = import.meta.glob(
  '/src/assets/docs/**/*.md',
  {
    eager: true,
    import: 'default',
  }
);



export const toUrl = (path: string): string | null => {
  // const mod = docsUrls[path];
  // if (!mod) return null;

  // // Если это модуль, берем из default путь
  // const url = hasDefault(mod) ? mod.default : mod;

  return path
    .replace('/src/assets/docs', '/docs')
    .replace(/\.md$/, '')

};

// export const toUrl = (path: string) => {
//   console.log()
//   return docsUrls[path]
// }
  
    // ?.replace('/src/assets/docs', '/docs') // или '/assets/docs'
    // ?.replace(/\.md$/, '');


// export const toUrl = (path: string) => {
 
//   return docsUrls[path]
// }
  
    // .replace('/src/assets/docs', '/docs')
    // .replace(/\.md$/, '');


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
      .replace('/src/assets/docs/', '')
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






// Структура ссылок
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
