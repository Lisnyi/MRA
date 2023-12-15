import { FC } from 'react'
import { Pressable } from 'react-native';
import { Icon } from '../../../../assets/icons'
import { useThemeContext, useSound } from '../../../../shared';
import { styles } from './TestMelodyButton.styled'
import type { Melody } from '../../../../types'

type Props = {
    melody: Melody
}

export const TestMelodyButton: FC<Props> = ({ melody }) => {

    const { theme } = useThemeContext()
    const { playSound } = useSound(melody)

    const buttonStyles = {
        backgroundColor: theme.dark
    }

    return (
        <Pressable
            onPress={playSound}
            style={[styles.button, buttonStyles]}
        >
            <Icon style={[{ marginLeft: 1 }]} name='play' size={12} color={theme.light} />
        </Pressable>
    )
}
