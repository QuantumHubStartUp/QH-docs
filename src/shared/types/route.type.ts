import { ComponentType, LazyExoticComponent } from 'react';

export type TRoute = {
  name: string;
  path: string;
  component: LazyExoticComponent<ComponentType>;
};
