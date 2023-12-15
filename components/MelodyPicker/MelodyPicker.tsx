import { FC } from 'react'
import { View } from 'react-native'
import { MelodyItem } from './MelodyItem'
import type { Melody } from '../../types'

export const MelodyPicker: FC = () => {

    const soundsSet: Melody[] = ['none', 'bell', 'echo', 'tuturu']

    return (
        <View>
            {soundsSet.map((s, i) => <MelodyItem sound={s} key={s} lastItem={soundsSet.length === i + 1} />)}
        </View>
    )
}
