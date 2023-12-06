import { FC } from 'react'
import { Container, Section, Timer, Table } from "../../components";

export const GameScreen: FC = () => {

    return (
        <Container>
            <Section>
                <Timer />
                <Table />
            </Section>
        </Container>
    )
}