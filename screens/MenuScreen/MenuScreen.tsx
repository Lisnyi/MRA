import { FC } from 'react'
import { StatusBar } from 'react-native';
import { useThemeContext } from '../../shared';
import { Container, Section, MainMenu } from "../../components";

export const MenuScreen: FC = () => {

    const { theme } = useThemeContext()

    return (
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor={theme.backGround}
            />
            <Section>
                <MainMenu />
            </Section>
        </Container>
    )
}
