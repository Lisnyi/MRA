import { FC, useState } from 'react';
import { View, Text, Pressable, FlatList } from 'react-native'
import { CustomModal } from '../../../common'
import { NumberButton } from './NumberButton';
import { useThemeContext } from "../../../../shared"
import { styles } from './NumberOfVotes.styled'

type Props = {
    votes: null | number,
    addVotes: (vote:number) => void,
    totalVotes: number
}

export const NumberOfVotes: FC<Props> = ({ votes, addVotes, totalVotes }) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const votesOptions: Array<number> = Array.from({ length: totalVotes + 1 })
    const { theme } = useThemeContext()

    function choseVotes(vote: number) {
        addVotes(vote)
        setIsMenuVisible(false)
    }

    return (
        <View>
            {isMenuVisible && <CustomModal isOpen={isMenuVisible} onClose={setIsMenuVisible} modalStyles={styles.menu}>
                <FlatList
                    data={votesOptions}
                    numColumns={3}
                    columnWrapperStyle={[styles.menuGrid]}
                    renderItem={({ item, index }) => <NumberButton number={index} onPress={() => choseVotes(index)} />}
                    keyExtractor={(p, index) => index.toString()} />
            </CustomModal>
            }
            <Pressable
                style={[styles.button, { backgroundColor: theme.light }]}
                onPress={() => setIsMenuVisible(!isMenuVisible)}>
                {!null && <Text style={[styles.text, { color: theme.dark }]}>{votes}</Text>}
            </Pressable>
        </View>
    )
}
