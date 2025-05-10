import { JSX } from "react";


export interface IPathApp {
    path: string;
    component: React.LazyExoticComponent<() => JSX.Element>;
}