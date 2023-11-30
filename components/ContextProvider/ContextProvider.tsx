import { FC, useState, PropsWithChildren } from 'react';
import { ThemeContext } from '../../shared';
import { colorTheme } from '../../styles';
import type { ThemeState } from '../../types';

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {

    const [theme, setTheme] = useState<ThemeState>(colorTheme.dark);

    function changeTheme(theme: ThemeState) {
        setTheme(theme)
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}