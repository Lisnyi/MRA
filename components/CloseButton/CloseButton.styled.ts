import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        position: "absolute",
        top: StatusBar.currentHeight ? 57 - StatusBar.currentHeight : 57,
        right: 3,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 50,
        opacity: 0.5,
        zIndex: 5
    }
})