import AsyncStorage from '@react-native-async-storage/async-storage'
import type { ThemeState, Melody } from '../types'

export const storeTheme = async (theme: ThemeState) => {
    try {
        const jsonTheme = JSON.stringify(theme)
        await AsyncStorage.setItem(`theme`, jsonTheme)
    } catch (e) {
        console.log(e)
    }
}

export const storeMelody = async (melody: Melody) => {
    try {
        await AsyncStorage.setItem(`melody`, melody)
    } catch (e) {
        console.log(e)
    }
}

export const getStorageTheme = async () => {
    try {
        const jsonTheme = await AsyncStorage.getItem('theme');
        return jsonTheme !== null ? JSON.parse(jsonTheme) : null;
    } catch (e) {
        console.log(e)
    }
}

export const getStorageMelody = async () => {
    try {
        const melody = await AsyncStorage.getItem('melody');
        return melody !== null ? melody : null;
    } catch (e) {
        console.log(e)
    }
}