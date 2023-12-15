import { FC } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '../../common'
import { styles } from './ButtonsStack.styles'

type Props = {
    resetGame: () => void,
    resetVotes: () => void
}

export const ButtonsStack: FC<Props> = ({ resetGame, resetVotes }) => {

    const navigation = useNavigation();

    return (
        <>
            <View style={[styles.box, { marginBottom: 8 }]}>
                <CustomButton text='Reset game' onPress={resetGame} />
                <CustomButton text='Reset votes' onPress={resetVotes} />
            </View>
            <View style={[styles.box]}>
                <CustomButton text='Back to menu' onPress={navigation.goBack} buttonStyles={{ width: '100%' }} />
            </View>
        </>
    )
}
