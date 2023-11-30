import { FC } from 'react'
import { StatusBar } from 'react-native';
import { Container, Section, Timer, Table } from "../../components";

export const MainScreen: FC = () => {

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='#2E4F4F'
      />
      <Section>
        <Timer />
        <Table />
      </Section>
    </Container>
  )
}