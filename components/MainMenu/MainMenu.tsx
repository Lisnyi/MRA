import { FC } from 'react'
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuItem } from './MenuItem';
import type { StackNavigation } from '../../types'
import { styles } from './MainMenu.styled'

export const MainMenu: FC = () => {

    const navigation = useNavigation<StackNavigation>();

    return (
        <ScrollView style={[styles.box]} role='menu'>
            <MenuItem title='Start game' onPress={() => navigation.navigate('Game')} itemStyle={styles.item} />
            <MenuItem title='Settings' onPress={() => navigation.navigate('Settings')} itemStyle={styles.item} />
            <MenuItem title='About' onPress={() => navigation.navigate('About')} />
        </ScrollView>
    )
}
