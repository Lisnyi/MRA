import { FC, useState, useEffect } from 'react'
import { View } from 'react-native';
import { TimerTimeButtonsStack } from './TimerTimeButtonsStack'
import { TimerDisplay } from './TimerDisplay'
import { useSound, useSoundContext } from '../../shared';
import { styles } from './Timer.styled'

export const Timer: FC = () => {

    const [time, setTime] = useState(60)
    const [timerId, setTimerId] = useState<NodeJS.Timeout>()
    const [isStarted, setIsStarted] = useState(false)
    const { melody } = useSoundContext()
    const { playSound } = useSound(melody)

    useEffect(() => {
        if (time <= 0) {
            melody !== 'none' && playSound()
            stopTimer()
            setTime(0)
        }
    }, [time]);

    useEffect(() => {
        return () => {
            stopTimer()
        };
    }, []);

    function stopTimer() {
        clearInterval(timerId)
        setTimerId(undefined)
        setIsStarted(false)
    }

    function startTimer() {
        if (time > 0) {
            setIsStarted(true)
            const id = setInterval(() => {
                setTime(prev => prev - 1)
            }, 1000);
            setTimerId(id)
        }
    };

    function changeTime(time: number) {
        if (isStarted) {
            stopTimer()
        }
        setTime(time)
    }

    return (
        <View style={[styles.box]}>
            <TimerTimeButtonsStack setTime={changeTime} />
            <TimerDisplay time={time} isStarted={isStarted} startTimer={startTimer} stopTimer={stopTimer} />
        </View>
    )
}