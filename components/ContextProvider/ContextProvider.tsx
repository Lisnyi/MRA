import { FC, useState, useEffect, PropsWithChildren } from 'react';
import { ThemeContext, SoundContext } from '../../shared';
import { getStorageTheme, getStorageMelody, storeMelody, storeTheme } from '../../localStorage';
import { colorTheme } from '../../styles';
import type { ThemeState, Melody } from '../../types';

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {

    const [theme, setTheme] = useState<ThemeState>(colorTheme.classic);
    const [melody, setMelody] = useState<Melody>('none')

    useEffect(() => {
        const getDefaultTheme = async () => {
            const storageTheme = await getStorageTheme()
            storageTheme && setTheme(storageTheme)
        };

        const getDefaultMelody = async () => {
            const storageMelody = await getStorageMelody()
            storageMelody && setMelody(storageMelody as Melody)
        };

        getDefaultTheme()
        getDefaultMelody()
    }, [])

    function changeTheme(theme: ThemeState) {
        setTheme(theme)
        storeTheme(theme)
    }

    function changeMelody(sound: Melody) {
        setMelody(sound)
        storeMelody(sound)
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <SoundContext.Provider value={{ melody, changeMelody }}>
                {children}
            </SoundContext.Provider>
        </ThemeContext.Provider>
    );
}