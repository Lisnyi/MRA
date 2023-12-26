import { FC } from 'react'
import { View, Pressable } from 'react-native'
import { Icon } from '../../../../../assets/icons'
import { NumberOfVotes } from './NumberOfVotes'
import { useThemeContext } from '../../../../../shared'
import { styles } from './VotingBox.styled'
import type { VotingType } from '../../../../../types'

type Props = {
    inGame: boolean,
    voting: VotingType,
    addVotes: (vote: number) => void,
    removePlayerFromVote: () => void,
    addPlayerToVote: () => void,
    leftVotes: number,
    disabledVoting: boolean,
    onVotingPlayers: number
}

export const VotingBox: FC<Props> = ({ inGame, voting, disabledVoting, addPlayerToVote, removePlayerFromVote, addVotes, leftVotes, onVotingPlayers }) => {

    const { theme } = useThemeContext()
    const { votes, onVote } = voting

    return (
        <View style={[styles.box]}>
            {onVote && <NumberOfVotes
                votes={votes}
                addVotes={addVotes}
                leftVotes={leftVotes}
                disabledVoting={disabledVoting}
                onVotingPlayers={onVotingPlayers}
            />}
            <Pressable disabled={!inGame} onPress={onVote ? removePlayerFromVote : addPlayerToVote} style={[{ marginLeft: onVote ? 10 : 38 }]}>
                <Icon name='like' size={25} color={onVote ? theme.accent : theme.light} />
            </Pressable>
        </View>
    )
}
