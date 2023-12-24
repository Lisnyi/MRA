import { useCallback, useEffect } from 'react';
import { StyleSheet, AppState } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { UserRoutes } from './routes';
import { removeGame } from './localStorage'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ContextProvider } from './components';

SplashScreen.preventAutoHideAsync();

export default function App() {

    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (nextAppState === 'inactive') {
                removeGame()
            }
        });

        return () => {
            subscription.remove();
        };
    }, []);

    const [fontsLoaded] = useFonts({
        "NotoSans-Regular": require("./assets/fonts/NotoSans-Regular.ttf"),
        "NotoSans-SemiBold": require("./assets/fonts/NotoSans-SemiBold.ttf"),
        IcoMoon: require('./assets/icomoon/icomoon.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ContextProvider>
            <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
                <NavigationContainer>
                    <UserRoutes />
                </NavigationContainer>
            </SafeAreaProvider>
        </ContextProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
