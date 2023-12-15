import { FC } from 'react'
import { Text, Linking, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Container, Section, CustomButton, Block, Instruction, Title } from "../../components";
import { useThemeContext } from '../../shared';
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
                <ScrollView>
                    <Block>
                        <Title >
                            MRA - mafia referee assistant.
                        </Title>
                        <Text style={[styles.text, textStyle]}>
                            The program was created for people who conducts classic mafia games, but do not like to look for forms, pieces of paper, pens.
                        </Text>
                    </Block>
                    <Block>
                        <Instruction />
                    </Block>
                    <Block>
                        <Text style={[styles.text, textStyle]}>
                            For any questions, suggestions, please contact Telegram <Text role='link' style={[styles.text, linkStyle]} onPress={() => Linking.openURL('http://t.me/ho_0bbs')}>@ho_0bbs</Text>
                        </Text>
                    </Block>
                    <CustomButton text='Back to menu' onPress={navigation.goBack} />
                </ScrollView>
            </Section>
        </Container>
    )
}
