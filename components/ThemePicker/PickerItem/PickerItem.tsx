import { FC } from 'react'
import { Pressable } from 'react-native'
import { ColorsSet } from './ColorsSet'
import { CheckBox } from '../../common'
import { useThemeContext } from '../../../shared'
import { colorTheme } from '../../../styles'
import type { SetType } from '../../../types'
import { styles } from './PickerItem.styled'

type Props = {
    set: SetType,
    lastItem: boolean
}

export const PickerItem: FC<Props> = ({ set, lastItem }) => {

    const { theme, changeTheme } = useThemeContext()
    
    return (
        <Pressable style={[styles.box, {marginBottom: lastItem ? 0 : 15}]} onPress={() => changeTheme(colorTheme[set])}>
            <CheckBox active={JSON.stringify(theme) === JSON.stringify(colorTheme[set])} boxStyles={{marginRight: 5}}/>
            <ColorsSet set={set} />
        </Pressable>
    )
}
