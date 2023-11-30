import { FC, Dispatch, SetStateAction } from "react"
import { FlatList } from "react-native"
import { Player } from "../index"
import type { PlayerType } from "../../types"

type Props = {
    playersList: PlayerType[],
    totalVotes: number,
    checkQueueOrder: (order: number | null) => void,
    setPlayersList: Dispatch<SetStateAction<PlayerType[]>>
}

export const PlayersList: FC<Props> = ({ playersList, setPlayersList, totalVotes, checkQueueOrder }) => {

    return (
        <FlatList
            data={playersList}
            renderItem={({ item }) => <Player player={item} setPlayersList={setPlayersList} checkQueueOrder={checkQueueOrder} totalVotes={totalVotes} />}
            keyExtractor={(p, index) => index.toString()}
        />
    )
}
