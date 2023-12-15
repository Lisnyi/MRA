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

export type SetType = 'dark' | 'light' | 'neon' | 'classic'