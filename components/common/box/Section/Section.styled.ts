import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    section: {
        flex: 1,
        paddingTop: StatusBar.currentHeight ? 54 - StatusBar.currentHeight : 54,
        paddingBottom: 15
    },
});