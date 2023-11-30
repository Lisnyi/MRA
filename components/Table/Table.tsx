import { useState } from "react"
import { View } from "react-native"
import { VotingQueue } from "../VotingQueue"
import { PlayersList } from "../PlayersList"
import { styles } from './Table.styled'
import type { PlayerType } from "../../types"

export const Table = () => {
    const players: Array<PlayerType> = Array.from({ length: 10 }, (v, i) => {
        return {
            inGame: true,
            playerNumber: i + 1,
            fouls: 0,
            voiting: {
                onVote: false,
                votes: null,
                order: null
            }
        }
    })

    const [playersList, setPlayersList] = useState<Array<PlayerType>>(players)

    const votingQueue = playersList.filter(p => p.voiting.onVote).sort((a, b) => {
        if (a.voiting.order !== null && b.voiting.order !== null) {
            return a.voiting.order - b.voiting.order
        }
        return 0
    })

    const inGamePlayers = playersList.filter(p => p.inGame)

    const votesCast = votingQueue.reduce((previousValue, p) => {
        if (p.voiting.votes !== null) {
            return previousValue + p.voiting.votes;
        }
        return previousValue + 0
    }, 0)

    const leftVotes = inGamePlayers.length - votesCast

    function checkQueueOrder(order: number | null) {
        if (votingQueue.length === order || order === null) {
            return
        }
        setPlayersList(prev => {
            const queue = prev.filter(p => p.voiting.order !== null && p.voiting.order > order)
            queue.forEach(p => p.voiting.order && p.voiting.order--)
            return [...prev]
        })
    }

    console.log(playersList)
    console.log(votingQueue)

    return (
        <View style={[styles.box]}>
            <VotingQueue votingList={votingQueue} />
            <PlayersList playersList={playersList} setPlayersList={setPlayersList} checkQueueOrder={checkQueueOrder} totalVotes={inGamePlayers.length} leftVotes={leftVotes}/>
        </View>
    )
}
