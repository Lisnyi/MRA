import { useState, useEffect } from 'react'
import { Audio } from 'expo-av';
import type { Melody } from '../../types';

export const useSound = (pickedSound: Melody) => {
    const [melody, setMelody] = useState<Audio.Sound>();

    function getMelodyPath(sound: Melody) {
        switch (sound) {
            case 'echo':
                return require('../../assets/sounds/echo.mp3');
            case 'tuturu':
                return require('../../assets/sounds/tuturu.mp3');
            case 'bell':
                return require('../../assets/sounds/bell.mp3');
        }
    }

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(getMelodyPath(pickedSound));
        setMelody(sound);
        await sound.playAsync();
    }

    useEffect(() => {
        return melody
            ? () => {
                melody.unloadAsync();
            }
            : undefined;
    }, [melody]);

    return { playSound }
}
