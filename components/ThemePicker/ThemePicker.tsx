import { FC } from 'react'
import { View } from 'react-native'
import { PickerItem } from './PickerItem'
import { colorTheme } from '../../styles'
import type { SetType } from '../../types'

export const ThemePicker: FC = () => {

    const sets = Object.keys(colorTheme)

    return (
        <View>
            {sets.map((s, i) => <PickerItem set={s as SetType} key={s} lastItem={sets.length === i + 1} />)}
        </View>
    )
}
