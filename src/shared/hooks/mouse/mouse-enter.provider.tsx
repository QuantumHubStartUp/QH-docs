
import React, { createContext, useState } from "react";

type MouseEnterContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const MouseEnterContext = createContext<MouseEnterContextType | undefined>(undefined);

export const MouseEnterProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      {children}
    </MouseEnterContext.Provider>
  );
};