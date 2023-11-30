import { FC } from "react"
import { Pressable, GestureResponderEvent } from "react-native"
import { Icon } from "../../../../assets/icons"
import { useThemeContext } from "../../../../shared"
import { styles } from './FoulsButton.styled'

type Props = {
    icon: 'plus' | 'minus'
    onPress: (e: GestureResponderEvent) => void,
    disabled?: boolean
}

export const FoulsButton: FC<Props> = ({ onPress, icon, disabled }) => {

    const { theme } = useThemeContext()

    const buttonColors = {
        backgroundColor: theme.light,
        borderColor: theme.dark,
    }

    return (
        <Pressable
            disabled={disabled}
            onPress={onPress}
            style={[styles.button, buttonColors]}>
            <Icon name={icon} size={18} color={theme.dark} />
        </Pressable>
    )
}
