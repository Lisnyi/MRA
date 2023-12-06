import { FC } from 'react'
import { View, Text } from 'react-native';
import { StartTimerButton } from './StartTimerButton';
import { useThemeContext } from '../../../shared';
import { styles } from './TimerDisplay.styled'

type Props = {
    time: number,
    isStarted: boolean,
    startTimer: () => void,
    stopTimer: () => void,
}

export const TimerDisplay: FC<Props> = ({ time, isStarted, startTimer, stopTimer }) => {

    const { theme } = useThemeContext()

    const displayStyles = {
        borderColor: theme.dark,
        backgroundColor: theme.light
    }

    return (
        <View style={[styles.box]}>
            <StartTimerButton onPress={isStarted ? stopTimer : startTimer} isStarted={isStarted} />
            <View style={[styles.display, displayStyles]}>
                <Text style={[styles.time, { color: theme.dark }]}>
                    {time}
                </Text>
            </View>
        </View>
    )
}