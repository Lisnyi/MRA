import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { UserRoutes } from './routes';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ContextProvider } from './components';

SplashScreen.preventAutoHideAsync();

export default function App() {

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
                    <UserRoutes/>
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
