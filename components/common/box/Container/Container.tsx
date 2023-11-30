import { ReactNode, FC } from 'react'
import { View } from 'react-native';
import { useThemeContext } from '../../../../shared';
import { styles } from './Container.styled'

type Props = {
  children?: ReactNode
}

export const Container: FC<Props> = ({ children }) => {

  const { theme } = useThemeContext()

  return (
    <View style={[styles.container, { backgroundColor: theme.backGround }]}>
      {children}
    </View>
  )
}