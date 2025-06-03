import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider; //can directly use variables and fun{values} of context where provider is wraped

export default function useTheme() {
  //custom hook, only this can be imported where ever we need
  return useContext(ThemeContext);
}
