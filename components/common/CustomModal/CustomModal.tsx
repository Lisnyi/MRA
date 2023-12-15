import { FC, PropsWithChildren, Dispatch, SetStateAction } from "react"
import { Modal, Pressable, ViewStyle } from "react-native"
import { useThemeContext } from "../../../shared"
import { styles } from './CustomModal.styled'

type Props = {
    isOpen: boolean,
    onClose: Dispatch<SetStateAction<boolean>>,
    modalStyles?: ViewStyle
}

export const CustomModal: FC<PropsWithChildren<Props>> = ({ children, isOpen, onClose, modalStyles }) => {

    const { theme } = useThemeContext()

    const modalColors = {
        backgroundColor: theme.backGround,
        borderColor: theme.light,
        shadowColor: theme.light,
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isOpen}
            onRequestClose={() => {
                onClose(!isOpen);
            }}>
            <Pressable style={[styles.backdrop]} onPress={() => onClose(!isOpen)}>
                <Pressable style={[styles.modal, modalColors, modalStyles]}>
                    {children}
                </Pressable>
            </Pressable>
        </Modal>
    )
}

