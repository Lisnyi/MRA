import { useContext, createContext } from "react";
import type { Theme } from "../../types";

export const ThemeContext = createContext <Theme>({} as Theme);

export const useThemeContext = () => useContext(ThemeContext);