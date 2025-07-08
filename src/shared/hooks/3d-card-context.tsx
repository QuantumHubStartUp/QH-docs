// "use client";

// import React, { createContext, useContext, useState } from "react";

// type MouseEnterContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

// const MouseEnterContext = createContext<MouseEnterContextType | undefined>(undefined);

// export const MouseEnterProvider = ({ children }: { children: React.ReactNode }) => {
//   const [isMouseEntered, setIsMouseEntered] = useState(false);
//   return (
//     <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
//       {children}
//     </MouseEnterContext.Provider>
//   );
// };

// export const useMouseEnter = (): MouseEnterContextType => {
//   const context = useContext(MouseEnterContext);
//   if (!context) {
//     throw new Error("useMouseEnter must be used within a MouseEnterProvider");
//   }
//   return context;
// };
