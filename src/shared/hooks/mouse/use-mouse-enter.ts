"use client";

import React, { createContext, useContext } from "react";

type MouseEnterContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const MouseEnterContext = createContext<MouseEnterContextType | undefined>(undefined);



export const useMouseEnter = (): MouseEnterContextType => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};