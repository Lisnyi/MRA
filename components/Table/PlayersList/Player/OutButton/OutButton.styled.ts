import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1
    },
    icon: {
        position: 'absolute',
    },
    exit: {
        alignSelf: 'center',
        left: 12,
        opacity: 0.2
    },
    enter: {
        alignSelf: 'center',
        left: 6,
        opacity: 1
    },
    number: {
        fontFamily: 'NotoSans-SemiBold',
        fontSize: 30,
        letterSpacing: 0,
        lineHeight: 38,
        marginRight: 1,
    }
});