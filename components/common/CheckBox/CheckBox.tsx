import { FC } from 'react'
import { View, ViewStyle } from 'react-native'
import { useThemeContext } from '../../../shared'
import { styles } from './CheckBox.styled'

type Props = {
    active: boolean,
    boxStyles?: ViewStyle
}

export const CheckBox: FC<Props> = ({ active, boxStyles }) => {

    const { theme } = useThemeContext()

    const borderColors = {
        borderColor: theme.dark
    }

    const activeColors = {
        backgroundColor: theme.dark
    }

    return (
        <View style={[styles.border, borderColors, boxStyles]}>
            {active && <View style={[styles.active, activeColors]} />}
        </View>
    )
}
