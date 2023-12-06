import { FC } from 'react'
import { View } from 'react-native'
import { colorTheme } from '../../../../styles'
import { styles } from './ColorsSet.styled'
import type { SetType } from '../../../../types'

type Props = {
    set: SetType
}

export const ColorsSet: FC<Props> = ({set}) => {

    const bgElementColors = {
        backgroundColor: colorTheme[set].backGround,
        borderColor: colorTheme[set].dark,
    }

    const darkElementColors = {
        backgroundColor: colorTheme[set].dark,
        borderColor: colorTheme[set].dark,
    }

    const lightElementColors = {
        backgroundColor: colorTheme[set].light,
        borderColor: colorTheme[set].dark,
    }

    const accentElementColors = {
        backgroundColor: colorTheme[set].accent,
        borderColor: colorTheme[set].dark,
    }

    return (
        <View style={[styles.box]}>
            <View style={[styles.element, bgElementColors]} />
            <View style={[styles.element, darkElementColors]} />
            <View style={[styles.element, lightElementColors]} />
            <View style={[styles.element, accentElementColors]} />
        </View>
    )
}
