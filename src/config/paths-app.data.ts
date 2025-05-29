
import { TRoute } from "@/shared/types";
import { lazy } from "react";





export const PATHS: Record<string, TRoute> = {
    home: {
        name: "Главная",
        path: "/",
        component: lazy(() => import("@/app/pages/home/HomePage")),
    },
    about: {
        name: "О нас",
        path: "/about",
        component: lazy(() => import("@/app/pages/about/AboutPage")),
    },
    docs: {
        name: "Документация",
        path: "/docs/*",
        component: lazy(() => import("@/app/pages/docs/DocsPage")),
    },
};


type TExternalLinks = {
    id: number
    name: string;
    url: string
};

export const externalLinks: Record<string, TExternalLinks> = {
    


    qhDocsGitHub: {
      id: 1,
      name: "GitHub документации",
      url: "https://github.com/freyzan2006/qh-docs",
    },

    qhGitHub: {
      id: 2,
      name: "GitHub проекта",
      url: "https://github.com/freyzan2006/qh",
    },

    qhFrontendGitHub: {
      id: 3,
      name: "GitHub проекта(frontend)",
      url: "https://github.com/freyzan2006/qh/QH-frontend",
    },

    qhBackendGitHub: {
      id: 4,
      name: "GitHub проекта(backend)",
      url: "https://github.com/freyzan2006/qh/QH-backed",
    },

};