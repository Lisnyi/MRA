import { FC } from 'react'
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Section, ThemePicker, MelodyPicker, CustomButton, Title, Block } from "../../components";

export const SettingsScreen: FC = () => {

    const navigation = useNavigation();

    return (
        <Container>
            <Section>
                <ScrollView>
                    <Block>
                        <Title>
                            Choose theme
                        </Title>
                        <ThemePicker />
                    </Block>
                    <Block>
                        <Title>
                            Choose timer melody
                        </Title>
                        <MelodyPicker />
                    </Block>
                    <CustomButton text='Back to menu' onPress={navigation.goBack} />
                </ScrollView>
            </Section>
        </Container>
    )
}
