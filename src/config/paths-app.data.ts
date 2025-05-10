import { IPathApp } from "@/shared/types";
import { lazy } from "react";



export const PATHS: IPathApp[] = [
    {
        path: "/",
        component: lazy(() => import("@app/pages/HomePage")),
    },
    {
        path: "/about",
        component: lazy(() => import("@app/pages/AboutPage")),
    },
    {
        path: "/docs/:id",
        component: lazy(() => import("@app/pages/DocsPage")),
    },
];