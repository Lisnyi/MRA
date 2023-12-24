import { FC } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { storeGame } from '../../../localStorage'
import { CustomButton } from '../../common'
import { styles } from './ButtonsStack.styles'
import type { PlayerType } from '../../../types'

type Props = {
    playersList: Array<PlayerType>,
    resetGame: () => void,
    resetVotes: () => void
}

export const ButtonsStack: FC<Props> = ({ playersList, resetGame, resetVotes }) => {

    const navigation = useNavigation();

    function backToMenu() {
        storeGame(playersList)
        navigation.goBack()
    }

    return (
        <>
            <View style={[styles.box, { marginBottom: 8 }]}>
                <CustomButton text='Reset game' onPress={resetGame} />
                <CustomButton text='Reset votes' onPress={resetVotes} />
            </View>
            <View style={[styles.box]}>
                <CustomButton text='Back to menu' onPress={backToMenu} buttonStyles={{ width: '100%' }} />
            </View>
        </>
    )
}
