import { FC, PropsWithChildren } from 'react'
import { View, ViewStyle } from 'react-native'
import { useThemeContext } from '../../../../shared'
import { styles } from './Block.styled'

type Props = {
    blockStyles?: ViewStyle
}

export const Block: FC<PropsWithChildren<Props>> = ({ children, blockStyles }) => {

    const { theme } = useThemeContext()

    const blockColors = {
        backgroundColor: theme.light
    }

    return (
        <View style={[styles.block, blockColors, blockStyles]}>{children}</View>
    )
}
