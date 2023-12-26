import { FC } from "react"
import { Pressable, Text } from "react-native"
import { Icon } from "../../../../../assets/icons"
import { useThemeContext } from "../../../../../shared"
import { styles } from './OutButton.styled'

type Props = {
    playerNumber: number,
    inGame: boolean,
    changeInGameStatus: (playerNumber: number, status: boolean) => void
}

export const OutButton: FC<Props> = ({ playerNumber, inGame, changeInGameStatus }) => {

    const { theme } = useThemeContext()
    const iconStyle = inGame ? styles.exit : styles.enter

    const buttonColors = {
        backgroundColor: theme.light,
        borderColor: theme.dark,
    }

    return (
        <Pressable onPress={() => changeInGameStatus(playerNumber, !inGame)} style={[styles.button, buttonColors]}>
            <Icon name={inGame ? 'exit' : 'enter'} style={[styles.icon, iconStyle]} size={30} color={theme.accent} />
            {inGame && <Text style={[styles.number, { color: theme.dark }]}>
                {playerNumber}
            </Text>}
        </Pressable>
    )
}