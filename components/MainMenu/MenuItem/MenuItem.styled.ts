import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    link: {
        width: '100%',
        padding: 12,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'NotoSans-SemiBold',
        fontSize: 20,
        lineHeight: 22,
        textTransform: 'uppercase',
        textShadowColor: 'white',
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 15,
    }
})