import { FC } from 'react'
import { View, Text } from 'react-native'
import { useThemeContext } from '../../../shared'
import { styles } from './VotingItem.styled'

type Props = {
    playerNumber: number | null
}

export const VotingItem: FC<Props> = ({ playerNumber }) => {

    const { theme } = useThemeContext()

    const emptyBoxStyles = {
        backgroundColor: theme.light,
        borderColor: theme.dark,
    }
    const fillBoxStyles = {
        backgroundColor: theme.dark,
        borderColor: theme.light,
    }
    const boxStyles = playerNumber ? fillBoxStyles : emptyBoxStyles
    const numberStyles = {
        marginRight: playerNumber === 10 ? 1 : 0,
        color: theme.light,
    } 

    return (
        <View style={[styles.box, boxStyles]}>
            {
                playerNumber && <Text style={[styles.number, numberStyles]}>
                    {playerNumber}
                </Text>
            }
        </View>
    )
}
