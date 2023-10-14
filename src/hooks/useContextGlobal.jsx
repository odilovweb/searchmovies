import { useContext } from "react";
import { ContextProvide } from "../context/ContextGlobal";

export function useContextGlobal() {
  const context = useContext(ContextProvide);
  if (!context) {
    throw new Error("useThemeContext must be used in ThemeContextProvider");
  }
  return context;
}
