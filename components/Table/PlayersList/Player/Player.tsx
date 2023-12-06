import { FC, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { View } from 'react-native'
import { FoulsCounter } from './FoulsCounter'
import { VotingBox } from './VotingBox'
import { OutButton } from './OutButton'
import { useThemeContext } from "../../../../shared"
import { styles } from './Player.styled'
import type { PlayerType, FoulsOperator, VotingInfoType } from '../../../../types'

type Props = {
	player: PlayerType,
	totalVotes: number,
	leftVotes: number,
	votingInfo: VotingInfoType,
	maxVotes: number,
	setVotingInfo: Dispatch<SetStateAction<VotingInfoType>>,
	setPlayersList: Dispatch<SetStateAction<PlayerType[]>>,
	checkQueueOrder: (order: number | null) => void,
	addToVote: (playerNumber: number) => void,
	removeFromVote: (playerNumber: number, order: number | null) => void,
	addVotes: (order: number, vote: number) => void,
	changeInGameStatus: (playerNumber: number) => void,
	changeFouls: (playerNumber: number, operator: FoulsOperator) => void,
	changeToOutStatus: (playerNumber: number, status: boolean) => void,
}

export const Player: FC<Props> = ({ player, totalVotes, votingInfo, maxVotes, setVotingInfo, leftVotes, addToVote, addVotes, removeFromVote, changeFouls, changeInGameStatus, changeToOutStatus }) => {

	const { theme } = useThemeContext()
	const { inGame, playerNumber, fouls, voting } = player
	const [disabledVoting, setDisabledVoting] = useState(true)

	const boxStyles = {
		opacity: inGame ? 1 : 0.7,
		backgroundColor: theme.dark,
		borderColor: voting.toOut ? theme.accent : theme.light
	}

	useEffect(() => {
		if (voting.votes !== null && voting.votes > totalVotes / 2) {
			changeToOutStatus(playerNumber, true)
		}
		else {
			changeToOutStatus(playerNumber, false)
		}
	}, [voting.votes])

	useEffect(() => {
		if (voting.votes) {
			if (voting.votes >= maxVotes && votingInfo.currentNumberOnVote >= votingInfo.totalOnVote) {
				changeToOutStatus(playerNumber, true)
			}
			if (voting.votes < maxVotes && votingInfo.currentNumberOnVote >= votingInfo.totalOnVote) {
				changeToOutStatus(playerNumber, false)
			}
		}
	}, [voting.votes, votingInfo.currentNumberOnVote, maxVotes])

	useEffect(() => {
		if (voting.order && voting.order <= votingInfo.currentNumberOnVote) {
			setDisabledVoting(false)
		}
		if (voting.order && voting.order > votingInfo.currentNumberOnVote) {
			setDisabledVoting(true)
		}
	}, [votingInfo.currentNumberOnVote, voting.votes, voting.order])

	function changePlayerFouls(operator: FoulsOperator) {
		changeFouls(playerNumber, operator)
	}

	function changeVotes(vote: number) {
		if (voting.votes === null) {
			setVotingInfo(prev => {
				return {
					...prev,
					currentNumberOnVote: prev.currentNumberOnVote + 1
				}
			})
		}
		if (voting.votes !== null) {
			setVotingInfo(prev => {
				return {
					...prev,
					currentNumberOnVote: voting.order ? voting.order + 1 : prev.currentNumberOnVote + 1
				}
			})
		}
		if (voting.order !== null) {
			addVotes(voting.order, vote)
		}
	}

	function deleteFromVote() {
		removeFromVote(playerNumber, voting.order)
		setDisabledVoting(true)
	}

	return (
		<View style={[styles.box, boxStyles]}>
			<OutButton
				playerNumber={playerNumber}
				inGame={inGame}
				changeInGameStatus={() => changeInGameStatus(playerNumber)} />
			<FoulsCounter
				fouls={fouls}
				inGame={inGame}
				changeFouls={changePlayerFouls}
				changeInGameStatus={() => changeInGameStatus(playerNumber)} />
			<VotingBox
				addPlayerToVote={() => addToVote(playerNumber)}
				removePlayerFromVote={deleteFromVote}
				inGame={inGame}
				voting={voting}
				disabledVoting={disabledVoting}
				leftVotes={leftVotes}
				addVotes={changeVotes}
				onVotingPlayers={votingInfo.totalOnVote} />
		</View>
	)
}
