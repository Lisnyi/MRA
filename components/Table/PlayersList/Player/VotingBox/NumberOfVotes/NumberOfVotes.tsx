import { FC, useState } from 'react';
import { View, Text, Pressable, FlatList } from 'react-native'
import { CustomModal } from '../../../../../common'
import { NumberButton } from './NumberButton';
import { useThemeContext } from "../../../../../../shared"
import { styles } from './NumberOfVotes.styled'

type Props = {
    votes: null | number,
    addVotes: (vote: number) => void,
    leftVotes: number,
    disabledVoting: boolean,
    onVotingPlayers: number
}

export const NumberOfVotes: FC<Props> = ({ votes, addVotes, leftVotes, disabledVoting, onVotingPlayers }) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const votesOptions: Array<number> = Array.from({ length: leftVotes + 1 + (votes ? votes : 0) })
    const { theme } = useThemeContext()
    
    const buttonStyles = {
        backgroundColor: theme.light,
        borderColor: disabledVoting ? theme.light : theme.accent,
        opacity: disabledVoting ? 0.8 : 1,
    }

    function choseVotes(vote: number) {
        addVotes(vote)
        setIsMenuVisible(false)
    }

    return (
        <View>
            {isMenuVisible && <CustomModal isOpen={isMenuVisible} onClose={setIsMenuVisible} modalStyles={styles.menu}>
                {onVotingPlayers === 1
                    ? <NumberButton number={10} onPress={() => choseVotes(10)} />
                    : <FlatList
                        data={votesOptions}
                        numColumns={3}
                        columnWrapperStyle={[styles.menuGrid]}
                        renderItem={({ item, index }) => <NumberButton number={index} onPress={() => choseVotes(index)} />}
                        keyExtractor={(p, index) => index.toString()} />}
            </CustomModal>
            }
            <Pressable
                disabled={disabledVoting}
                style={[styles.button, buttonStyles]}
                onPress={() => setIsMenuVisible(!isMenuVisible)}>
                {!null && <Text style={[styles.text, { color: theme.dark }]}>{votes}</Text>}
            </Pressable>
        </View>
    )
}
