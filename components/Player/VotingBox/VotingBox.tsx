import { FC, useEffect } from 'react'
import { View, Pressable } from 'react-native'
import { Icon } from '../../../assets/icons'
import { NumberOfVotes } from './NumberOfVotes'
import { useThemeContext } from '../../../shared'
import { styles } from './VotingBox.styled'
import { VoitingType } from '../../../types'

type Props = {
    inGame: boolean,
    voiting: VoitingType,
    addVotes: (vote:number) => void,
    removePlayerFromVote: () => void,
    addPlayerToVote: () => void,
    totalVotes: number
}

export const VotingBox: FC<Props> = ({ inGame, voiting, addPlayerToVote, removePlayerFromVote, addVotes, totalVotes }) => {

    const { theme } = useThemeContext()
    const { votes, onVote } = voiting

    useEffect(() => {
        !inGame && removePlayerFromVote()
    }, [inGame])

    return (
        <View style={[styles.box]}>
            {onVote && <NumberOfVotes votes={votes} addVotes={addVotes} totalVotes={totalVotes}/>}
            <Pressable disabled={!inGame} onPress={onVote ? removePlayerFromVote : addPlayerToVote} style={[{ marginLeft: onVote ? 10 : 38 }]}>
                <Icon name='like' size={25} color={onVote ? theme.accent : theme.light} />
            </Pressable>
        </View>
    )
}
