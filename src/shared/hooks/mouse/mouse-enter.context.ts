// src/shared/hooks/mouse/mouse-enter-context.ts
import { createContext } from "react";

export type MouseEnterContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export const MouseEnterContext = createContext<MouseEnterContextType | undefined>(undefined);
