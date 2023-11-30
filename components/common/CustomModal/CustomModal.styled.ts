import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5
    }
})