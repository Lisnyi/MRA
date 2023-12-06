import { FC } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Container, Section, ThemePicker, CustomButton, Title, Block } from "../../components";

export const SettingsScreen: FC = () => {

    const navigation = useNavigation();

    return (
        <Container>
            <Section>
                <Block blockStyles={{marginBottom: 15}}>
                    <Title textStyles={{ marginBottom: 10 }}>
                        Choose theme
                    </Title>
                    <ThemePicker />
                </Block>
                <CustomButton text='Back to menu' onPress={navigation.goBack} />
            </Section>
        </Container>
    )
}
