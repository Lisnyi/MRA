import { FC } from 'react'
import { View, Text } from 'react-native'
import { useThemeContext } from "../../../../../../shared"
import { styles } from './FoulsDisplay.styled'

type Props = {
    fouls: number
}

export const FoulsDisplay: FC<Props> = ({ fouls }) => {

    const { theme } = useThemeContext()

    return (
        <View style={[styles.box, { backgroundColor: theme.light }]}>
            <Text style={[styles.text, { color: theme.dark }]}>
                {fouls}
            </Text>
        </View>
    )
}
