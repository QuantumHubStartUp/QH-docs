// src/shared/hooks/mouse/mouse-enter-context.ts
"use client";

import { useState, ReactNode } from "react";
import { MouseEnterContext } from "./mouse-enter.context";




export const MouseEnterProvider = ({ children }: { children: ReactNode }) => {
  const mouseState = useState(false);
  return (
    <MouseEnterContext.Provider value={mouseState}>
      {children}
    </MouseEnterContext.Provider>
  );
};

