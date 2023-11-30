export type ThemeState = {
    backGround: string,
    dark: string,
    light: string,
    accent: string
}

export type Theme = {
    theme: ThemeState,
    changeTheme: (theme: ThemeState) => void
}