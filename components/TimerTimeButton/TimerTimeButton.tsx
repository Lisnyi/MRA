import { FC } from 'react'
import { Pressable, GestureResponderEvent, Text } from 'react-native';
import { useThemeContext } from '../../shared';
import { styles } from './TimerTimeButton.styled'

type Props = {
  onPress: (e: GestureResponderEvent) => void,
  text: string,
}

export const TimerTimeButton: FC<Props> = ({ onPress, text }) => {

  const { theme } = useThemeContext()

  const buttonStyles = {
    backgroundColor: theme.dark,
    borderColor: theme.light,
  }

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonStyles]}
    >
      <Text
        style={[styles.text, { color: theme.light }]}
      >
        {text}
      </Text>
    </Pressable>
  )
}