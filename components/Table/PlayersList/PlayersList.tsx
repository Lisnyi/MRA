import { FC, Dispatch, SetStateAction } from "react"
import { FlatList } from "react-native"
import { Player } from "./Player"
import { ButtonsStack } from "../ButtonsStack"
import type { PlayerType, VotingInfoType, FoulsOperator } from "../../../types"

type Props = {
    playersList: PlayerType[],
    totalVotes: number,
    leftVotes: number,
    votingInfo: VotingInfoType,
    maxVotes: number,
    setVotingInfo: Dispatch<SetStateAction<VotingInfoType>>,
    checkQueueOrder: (order: number | null) => void,
    setPlayersList: Dispatch<SetStateAction<PlayerType[]>>,
    addToVote: (playerNumber: number) => void,
    removeFromVote: (playerNumber: number, order: number | null) => void,
    addVotes: (order: number, vote: number) => void,
    changeInGameStatus: (playerNumber: number) => void,
    changeFouls: (playerNumber: number, operator: FoulsOperator) => void,
    changeToOutStatus: (playerNumber: number, status: boolean) => void,
    resetGame: () => void,
    resetVotes: () => void
}

export const PlayersList: FC<Props> = ({
    playersList,
    setPlayersList,
    totalVotes,
    maxVotes,
    checkQueueOrder,
    leftVotes,
    votingInfo,
    setVotingInfo,
    addToVote,
    addVotes,
    removeFromVote,
    changeFouls,
    changeInGameStatus,
    changeToOutStatus,
    resetGame,
    resetVotes
}) => {

    return (
        <FlatList
            data={playersList}
            renderItem={({ item }) =>
                <Player
                    player={item}
                    setPlayersList={setPlayersList}
                    checkQueueOrder={checkQueueOrder}
                    totalVotes={totalVotes}
                    leftVotes={leftVotes}
                    votingInfo={votingInfo}
                    setVotingInfo={setVotingInfo}
                    addToVote={addToVote}
                    removeFromVote={removeFromVote}
                    addVotes={addVotes}
                    changeFouls={changeFouls}
                    changeInGameStatus={changeInGameStatus}
                    changeToOutStatus={changeToOutStatus}
                    maxVotes={maxVotes} />}
            keyExtractor={(p, index) => index.toString()}
            ListFooterComponent={<ButtonsStack playersList={playersList} resetGame={resetGame} resetVotes={resetVotes} />}
        />
    )
}
