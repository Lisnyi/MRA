import { FC } from 'react'
import { StatusBar, ImageBackground } from 'react-native';
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
                <ImageBackground source={require('../../assets/icon.png')} resizeMode='center' style={{flex: 1}}>
                    <MainMenu />
                </ImageBackground>
            </Section>
        </Container>
    )
}
