import { FC, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { View } from 'react-native'
import { FoulsCounter } from './FoulsCounter'
import { VotingBox } from './VotingBox'
import { OutButton } from './OutButton'
import { useThemeContext } from "../../shared"
import { styles } from './Player.styled'
import type { PlayerType, FoulsOperator } from '../../types'

type Props = {
	player: PlayerType,
	totalVotes: number,
	checkQueueOrder: (order: number | null) => void
	setPlayersList: Dispatch<SetStateAction<PlayerType[]>>,
}

export const Player: FC<Props> = ({ player, setPlayersList, totalVotes, checkQueueOrder }) => {

	const { theme } = useThemeContext()
	const { inGame, playerNumber, fouls, voiting } = player
	const [toOut, setToOut] = useState(false)
	
	const boxStyles = {
		opacity: inGame ? 1 : 0.7,
		backgroundColor: theme.dark,
		borderColor: toOut ? theme.accent : theme.light
	}

	useEffect(() => {

		if (voiting.votes !== null && voiting.votes > 10 / 2) {
			setToOut(true)
		} else {
			setToOut(false)
		}
	
	}, [voiting.votes])

	function addToVote() {
		setPlayersList(prev => {
			const onVoteList = prev.filter(p => p.voiting.onVote)
			prev[playerNumber - 1].voiting = {
				...prev[playerNumber - 1].voiting,
				onVote: true,
				order: onVoteList.length + 1
			}
			return [...prev]
		})
	}

	function removeFromVote() {
		checkQueueOrder(voiting.order)
		setPlayersList(prev => {
			prev[playerNumber - 1].voiting = {
				onVote: false,
				order: null,
				votes: null,
			}
			return [...prev]
		})
	}

	function addVotes(vote: number) {
		setPlayersList(prev => {
			prev[playerNumber - 1].voiting.votes = vote
			return [...prev]
		})
	}

	function changeInGameStatus() {
		setPlayersList(prev => {
			prev[playerNumber - 1].inGame = !prev[playerNumber - 1].inGame
			return [...prev]
		})
	}

	function changeFouls(operator: FoulsOperator) {
		setPlayersList(prev => {
			prev[playerNumber - 1].fouls = operator === 'increment'
				? prev[playerNumber - 1].fouls + 1
				: prev[playerNumber - 1].fouls - 1
			return [...prev]
		})
	}

	return (
		<View style={[styles.box, boxStyles]}>
			<OutButton playerNumber={playerNumber} inGame={inGame} changeInGameStatus={changeInGameStatus} />
			<FoulsCounter fouls={fouls} inGame={inGame} changeFouls={changeFouls} changeInGameStatus={changeInGameStatus} />
			<VotingBox addPlayerToVote={addToVote} removePlayerFromVote={removeFromVote} inGame={inGame} voiting={voiting} totalVotes={totalVotes} addVotes={addVotes} />
		</View>
	)
}
