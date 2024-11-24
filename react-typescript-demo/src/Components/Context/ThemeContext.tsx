import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
    childern: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({childern,}: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{childern}</ThemeContext.Provider>
}
