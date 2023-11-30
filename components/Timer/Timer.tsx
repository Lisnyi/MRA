import { FC, useState, useEffect } from 'react'
import { View } from 'react-native';
import { TimerTimeButtonsStack, TimerDisplay } from '../index'
import { styles } from './Timer.styled'

export const Timer: FC = () => {

    const [time, setTime] = useState(60)
    const [timerId, setTimerId] = useState<NodeJS.Timeout>()
    const [isStarted, setIsStarted] = useState(false)

    useEffect(() => {
        if (time <= 0.1) {
            stopTimer()
            setTime(0)
        }
    }, [time]);

    function stopTimer() {
        clearInterval(timerId)
        setIsStarted(false)
    }

    function startTimer() {
        if (time > 0) {
            setIsStarted(true)
            const id = setInterval(() => setTime(prev => prev - 0.1), 100);
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
            <TimerDisplay time={Math.ceil(time)} isStarted={isStarted} startTimer={startTimer} stopTimer={stopTimer} />
        </View>
    )
}