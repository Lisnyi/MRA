import { FC } from "react"
import { View } from "react-native"
import { VotingItem } from "./VotingItem"
import { styles } from './VotingQueue.styled'
import type { PlayerType } from "../../types"

type Props = {
    votingList: PlayerType[]
}

export const VotingQueue: FC<Props> = ({ votingList }) => {
  
    const players = Array.from({ length: (10 - votingList.length) })

    return (
        <View style={[styles.box]}>
            {
                votingList.map(({playerNumber}) =>
                    <VotingItem playerNumber={playerNumber} key={playerNumber} />
                )
            }
            {
                players.map((_p, i) =>
                    <VotingItem playerNumber={null} key={i} />
                )
            }
        </View>
    )
}
