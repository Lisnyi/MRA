import { useEffect, FC } from "react"
import { View } from "react-native"
import { FoulsButton } from "./FoulsButton"
import { FoulsDisplay } from "./FoulsDisplay"
import { styles } from './FoulsCounter.styles'
import type { FoulsOperator } from "../../../../../types"

type Props = {
    inGame: boolean,
    fouls: number,
    changeFouls: (operator: FoulsOperator) => void
}

export const FoulsCounter: FC<Props> = ({ inGame, fouls, changeFouls }) => {

    function addFoul() {
        if (fouls < 4) {
            changeFouls('increment')
        }
    }

    function pickUpFoul() {
        if (fouls > 0) {
            changeFouls('decrement')
        }
    }

    return (
        <View style={styles.box}>
            <FoulsButton icon='minus' onPress={pickUpFoul} disabled={!inGame} />
            <FoulsDisplay fouls={fouls} />
            <FoulsButton icon='plus' onPress={addFoul} disabled={!inGame} />
        </View>
    )
}
