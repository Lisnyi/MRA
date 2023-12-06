import { FC } from 'react'
import { Pressable, GestureResponderEvent } from 'react-native';
import { Icon } from '../../../../assets/icons'
import { useThemeContext } from '../../../../shared';
import { styles } from './StartTimerButton.styled'

type Props = {
    isStarted: boolean,
    onPress: (e: GestureResponderEvent) => void
}

export const StartTimerButton: FC<Props> = ({ isStarted, onPress }) => {

    const { theme } = useThemeContext()

    const buttonStyles = {
        backgroundColor: theme.dark,
        borderColor: theme.light,
    }

    return (
        <Pressable
            onPress={onPress}
            style={[styles.button, buttonStyles]}
        >
            <Icon style={[{ marginLeft: isStarted ? 0 : 4 }]} name={isStarted ? 'pause' : 'play'} size={28} color={theme.light} />
        </Pressable>
    )
}