import { IPathApp } from "@/shared/types";



interface IRouterConfig {
    getPaths(): IPathApp[];
}


export class RouterConfig implements IRouterConfig {
    private paths: IPathApp[];

    constructor(paths: IPathApp[]) {
        this.paths = paths;
    }

    public getPaths() : IPathApp[] {
        return this.paths;
    }
}