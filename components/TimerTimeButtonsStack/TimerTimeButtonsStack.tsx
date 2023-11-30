import { FC } from 'react'
import { View } from 'react-native';
import { TimerTimeButton } from '../index'
import { styles } from './TimerTimeButtonsStack.styled'

type Props = {
  setTime: (start: number) => void
}

export const TimerTimeButtonsStack: FC<Props> = ({ setTime }) => {

  const defaultTime = [10, 20, 30, 60]

  return (
    <View style={[styles.box]}>
      {defaultTime.map(t => <TimerTimeButton text={t.toString()} onPress={() => setTime(t)} key={t}/>)}
    </View>
  )
}