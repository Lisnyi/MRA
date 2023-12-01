export type VotingType = {
    onVote: boolean,
    order: null | number,
    votes: null | number,
    toOut: boolean
}

export type PlayerType = {
    inGame: boolean,
    playerNumber: number,
    fouls: number,
    voting: VotingType,
}

export type FoulsOperator = 'increment' | 'decrement'