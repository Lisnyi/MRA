import { useEffect, useState } from "react"
import { View } from "react-native"
import { VotingQueue } from "./VotingQueue"
import { PlayersList } from "./PlayersList"
import { ButtonsStack } from "./ButtonsStack"
import { styles } from './Table.styled'
import type { PlayerType, VotingInfoType, FoulsOperator } from "../../types"

export const Table = () => {

    const players: Array<PlayerType> = Array.from({ length: 10 }, (v, i) => {
        return {
            inGame: true,
            playerNumber: i + 1,
            fouls: 0,
            voting: {
                onVote: false,
                votes: null,
                order: null,
                toOut: false
            }
        }
    })

    const defaultVotingInfo = {
        totalOnVote: 0,
        currentNumberOnVote: 0
    }

    const [playersList, setPlayersList] = useState<Array<PlayerType>>(players)
    const [votingInfo, setVotingInfo] = useState<VotingInfoType>(defaultVotingInfo)
    const [maxVotes, setMaxVotes] = useState(0)

    const votingQueue = playersList.filter(p => p.voting.onVote).sort((a, b) => {
        if (a.voting.order !== null && b.voting.order !== null) {
            return a.voting.order - b.voting.order
        }
        return 0
    })

    const inGamePlayers = playersList.filter(p => p.inGame)

    const votesCast = votingQueue.reduce((previousValue, p) => {
        if (p.voting.votes !== null) {
            return previousValue + p.voting.votes;
        }
        return previousValue + 0
    }, 0)

    const leftVotes = inGamePlayers.length - votesCast

    useEffect(() => {
        if (votingInfo.totalOnVote === 0) {
            setVotingInfo(prev => {
                return {
                    ...prev,
                    currentNumberOnVote: 0
                }
            })
        }
    }, [votingInfo.totalOnVote])

    useEffect(() => {
        if (votingInfo.currentNumberOnVote === votingInfo.totalOnVote && votingInfo.totalOnVote > 1) {
            addVotes(votingInfo.currentNumberOnVote, leftVotes)
        }
    }, [votingInfo.currentNumberOnVote])

    function checkQueueOrder(order: number | null) {
        if (votingQueue.length === order || order === null) {
            return
        }
        setPlayersList(prev => {
            const queue = prev.filter(p => p.voting.order !== null && p.voting.order > order)
            queue.forEach(p => p.voting.order && p.voting.order--)
            return [...prev]
        })
    }

    function addToVote(playerNumber: number) {
        setPlayersList(prev => {
            setVotingInfo({
                currentNumberOnVote: votingQueue.filter(p => p.voting.votes).length + 1,
                totalOnVote: votingQueue.length + 1
            })
            const onVoteList = prev.filter(p => p.voting.onVote)
            prev[playerNumber - 1].voting = {
                ...prev[playerNumber - 1].voting,
                onVote: true,
                order: onVoteList.length + 1
            }
            return [...prev]
        })
    }

    function removeFromVote(playerNumber: number, order: number | null) {
        checkQueueOrder(order)
        setPlayersList(prev => {
            setVotingInfo(prevInfo => {
                if (votingQueue.length === 0) {
                    return prevInfo
                }
                return {
                    currentNumberOnVote: votingQueue.filter(p => p.voting.votes).length + 1,
                    totalOnVote: votingQueue.length - 1
                }
            })
            votingQueue.forEach(p => p.voting.votes = null)
            prev[playerNumber - 1].voting = {
                onVote: false,
                order: null,
                votes: null,
                toOut: false
            }
            return [...prev]
        })
    }

    function addVotes(order: number, vote: number) {
        setPlayersList(prev => {
            const index = prev.findIndex(p => p.voting.order === order)
            if (index !== -1) {
                prev[index].voting.votes = vote
            }
            return [...prev]
        })
        if (maxVotes < vote) {
            setMaxVotes(vote)
        }
    }

    function changeInGameStatus(playerNumber: number) {
        setPlayersList(prev => {
            prev[playerNumber - 1].inGame = !prev[playerNumber - 1].inGame
            return [...prev]
        })
        setMaxVotes(0)
    }

    function changeFouls(playerNumber: number, operator: FoulsOperator) {
        setPlayersList(prev => {
            prev[playerNumber - 1].fouls = operator === 'increment'
                ? prev[playerNumber - 1].fouls + 1
                : prev[playerNumber - 1].fouls - 1
            return [...prev]
        })
    }

    function changeToOutStatus(playerNumber: number, status: boolean) {
        setPlayersList(prev => {
            prev[playerNumber - 1].voting.toOut = status
            return [...prev]
        })
    }

    function resetGame() {
        setPlayersList(players)
        setVotingInfo(defaultVotingInfo)
        setMaxVotes(0)
    }

    function resetVotes() {
        setPlayersList(prev => {
            prev.forEach(p => p.voting = {
                onVote: false,
                order: null,
                votes: null,
                toOut: false
            })
            return prev
        })
        setMaxVotes(0)
        setVotingInfo(defaultVotingInfo)
    }

    return (
        <View style={[styles.box]}>
            <VotingQueue votingList={votingQueue} />
            <PlayersList
                playersList={playersList}
                setPlayersList={setPlayersList}
                checkQueueOrder={checkQueueOrder}
                totalVotes={inGamePlayers.length}
                leftVotes={leftVotes}
                votingInfo={votingInfo}
                setVotingInfo={setVotingInfo}
                addToVote={addToVote}
                removeFromVote={removeFromVote}
                addVotes={addVotes}
                changeFouls={changeFouls}
                changeInGameStatus={changeInGameStatus}
                changeToOutStatus={changeToOutStatus}
                maxVotes={maxVotes}
                resetGame={resetGame}
                resetVotes={resetVotes} />
            {/* <ButtonsStack resetGame={resetGame} resetVotes={resetVotes} /> */}
        </View>
    )
}
