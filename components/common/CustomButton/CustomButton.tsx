import { FC } from 'react'
import { Pressable, Text, ViewStyle } from 'react-native'
import { useThemeContext } from '../../../shared'
import { styles } from './CustomButton.styled'

type Props = {
    text: string,
    onPress: () => void,
    buttonStyles?: ViewStyle
}

export const CustomButton: FC<Props> = ({ text, onPress, buttonStyles }) => {

    const { theme } = useThemeContext()

    const buttonColors = {
        backgroundColor: theme.dark,
        borderColor: theme.light,
    }

    return (
        <Pressable style={[styles.button, buttonColors, buttonStyles]} onPress={onPress}>
            <Text style={[styles.text, { color: theme.light }]}>
                {text}
            </Text>
        </Pressable>
    )
}