import { FC } from 'react'
import { Pressable, Text } from 'react-native'
import { useThemeContext } from "../../../../../../../shared"
import { styles } from './NumberButton.styled'

type Props = {
    number: number,
    onPress: () => void
}

export const NumberButton: FC<Props> = ({ number, onPress }) => {

    const { theme } = useThemeContext()
    const numberMargin = number === 10 ? 1 : 0

    const buttonStyles = {
        backgroundColor: theme.light
    }
    const textStyles = {
        color: theme.dark,
        marginRight: numberMargin,
    }

    return (
        <Pressable onPress={onPress} style={[styles.button, buttonStyles]}>
            <Text style={[styles.text, textStyles]}>{number}</Text>
        </Pressable>
    )
}
