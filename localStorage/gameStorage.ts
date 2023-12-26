import AsyncStorage from '@react-native-async-storage/async-storage'
import type { PlayerType } from '../types'

export const storeGame = async (game: Array<PlayerType>) => {
    try {
        const jsonGame = JSON.stringify(game)
        await AsyncStorage.setItem(`game`, jsonGame)
    } catch (e) {
        console.log(e)
    }
}

export const getStorageGame = async () => {
    try {
        const jsonGame = await AsyncStorage.getItem('game');
        return jsonGame !== null ? JSON.parse(jsonGame) as Array<PlayerType> : null;
    } catch (e) {
        console.log(e)
    }
}