import { FC, PropsWithChildren } from 'react'
import { Text, TextStyle } from 'react-native'
import { useThemeContext } from '../../../shared'
import { styles } from './Title.styles'

type Props = {
    textStyles?: TextStyle
}

export const Title: FC<PropsWithChildren<Props>> = ({ children, textStyles }) => {

    const { theme } = useThemeContext()

    const titleColors = {
        color: theme.dark
    }

    return (
        <Text style={[styles.title, titleColors, textStyles]}>
            {children}
        </Text>
    )
}
