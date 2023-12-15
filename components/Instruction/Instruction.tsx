import { Title } from '../common'
import { InstructionItem } from "./InstructionItem"


export const Instruction = () => {

    const instruction = [
        {
            image: require('../../assets/images/timer.jpg'),
            text: 'Timer'
        },
        {
            image: require('../../assets/images/voting-queue.jpg'),
            text: 'Voting queue'
        },
        {
            image: require('../../assets/images/player-buttons.jpg'),
            text: 'Buttons to kick or return a player from the table'
        },
        {
            image: require('../../assets/images/fouls.jpg'),
            text: 'Fouls counter'
        },
        {
            image: require('../../assets/images/vote.jpg'),
            text: `Voting block:\n1. The button to submit a player for voting\n2. Number of votes per player\n3. Current player on the ballot\n4. The next player on the ballot\n5. Menu for choosing the number of votes`
        },
    ]

    return (
        <>
            <Title>Instruction</Title>
            {instruction.map(({ image, text }, i) => <InstructionItem image={image} description={text} key={i.toString()} />)}
        </>
    )
}
