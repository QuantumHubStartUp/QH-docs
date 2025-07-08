import { useContext } from "react";
import { MouseEnterContext, MouseEnterContextType } from "./mouse-enter.context";


export const useMouseEnter = (): MouseEnterContextType => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};