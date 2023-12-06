import { FC } from 'react'
import { Text, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useThemeContext } from '../../shared';
import { Container, Section, CustomButton, Block } from "../../components";
import { styles } from './AboutScreen.styled'

export const AboutScreen: FC = () => {

    const navigation = useNavigation();
    const { theme } = useThemeContext()

    const textStyle = {
        color: theme.dark
    }

    const linkStyle = {
        color: theme.accent
    }

    return (
        <Container>
            <Section>
                <Block blockStyles={{marginBottom: 15}}>
                    <Text style={[styles.text, textStyle, { textAlign: 'center' }]}>
                        MRA - mafia referee assistant.
                    </Text>
                    <Text style={[styles.text, textStyle]}>
                        The program was created for people who conducts classic mafia games, but do not like to look for forms, pieces of paper, pens.
                    </Text>
                    <Text style={[styles.text, textStyle, {marginBottom: 0}]}>
                        For any questions, suggestions, please contact Telegram <Text role='link' style={[styles.text, linkStyle]} onPress={() => Linking.openURL('http://t.me/ho_0bbs')}>@ho_0bbs</Text>
                    </Text>
                </Block>
                <CustomButton text='Back to menu' onPress={navigation.goBack} />
            </Section>
        </Container>
    )
}
