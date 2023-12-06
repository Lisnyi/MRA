import { FC } from 'react'
import { Pressable, Text, ViewStyle } from 'react-native'
import { useThemeContext } from '../../../shared';
import { styles } from './MenuItem.styled'

type Props = {
    title: string,
    onPress: () => void,
    itemStyle?: ViewStyle
}

export const MenuItem: FC<Props> = ({ title, onPress, itemStyle }) => {

    const { theme } = useThemeContext()

    const linkStyles = {
        backgroundColor: 'transparent',
        borderColor: theme.light,
    }

    const textStyles = {
        color: theme.light
    }

    return (
        <Pressable onPress={onPress} style={[styles.link, linkStyles, itemStyle]} >
            <Text style={[styles.text, textStyles]}>
                {title}
            </Text>
        </Pressable >
    )
}
