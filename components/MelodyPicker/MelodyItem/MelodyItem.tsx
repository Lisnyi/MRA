import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'
import { TestMelodyButton } from './TestMelodyButton'
import { CheckBox } from '../../common'
import { useSoundContext, useThemeContext } from '../../../shared'
import type { Melody } from '../../../types'
import { styles } from './MelodyItem.styled'

type Props = {
    sound: Melody,
    lastItem: boolean
}

export const MelodyItem: FC<Props> = ({ sound, lastItem }) => {

    const { melody, changeMelody } = useSoundContext()
    const { theme } = useThemeContext()

    const textStyles = {
        color: theme.dark
    }

    return (
        <View style={[styles.box, { marginBottom: lastItem ? 0 : 15 }]}>
            <Pressable style={[styles.box]} onPress={() => changeMelody(sound)}>
                <CheckBox active={sound === melody} boxStyles={{ marginRight: 5 }} />
                <Text style={[styles.text, textStyles]}>{sound}</Text>
            </Pressable>
            {sound !== 'none' && <TestMelodyButton melody={sound} />}
        </View>
    )
}