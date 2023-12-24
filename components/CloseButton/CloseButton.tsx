import { FC } from 'react'
import { Pressable, GestureResponderEvent, ViewStyle } from 'react-native'
import { Icon } from '../../assets/icons'
import { useThemeContext } from '../../shared'
import { styles } from './CloseButton.styled'

type Props = {
    onPress: (event: GestureResponderEvent) => void,
    style?: ViewStyle
}

export const CloseButton: FC<Props> = ({ onPress, style }) => {

    const { theme } = useThemeContext()

    const ButtonStyles = {
        borderColor: theme.dark
    }

    return (
        <Pressable onPress={onPress} style={[styles.button, ButtonStyles, style]}>
            <Icon name='cross' color={theme.dark} size={12}/>
        </Pressable>
    )
}
