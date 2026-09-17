export const ThemeState = {
  DARK: "dark",
  LIGHT: "light",
}

export type ThemeState = typeof ThemeState [keyof typeof ThemeState];