import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MenuScreen, GameScreen, AboutScreen, SettingsScreen } from '../../screens';
import type { UserRootStackParamList } from '../../types';


export const UserRoutes: FC = () => {

    const Stack = createStackNavigator<UserRootStackParamList>();

    return (
        <Stack.Navigator initialRouteName="Menu">
            <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Menu" component={MenuScreen} />
                <Stack.Screen name="Game" component={GameScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
}