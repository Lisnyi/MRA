import { ReactNode, FC } from 'react'
import { View } from 'react-native';
import { styles } from './Section.styled'

type Props = {
    children?: ReactNode
}

export const Section: FC<Props> = ({ children }) => {
    return (
        <View style={[styles.section]}>
            {children}
        </View>
    )
}