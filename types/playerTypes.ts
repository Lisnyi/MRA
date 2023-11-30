// type onVote = {
//     onVote: true,
//     order: null,
//     votes: null | number,
// }

// type notOnVote = {
//     onVote: false,
//     order: number,
//     votes: null | number,
// }

export type VoitingType = {
    onVote: boolean,
    order: null | number,
    votes: null | number,
}

export type PlayerType = {
    inGame: boolean,
    playerNumber: number,
    fouls: number,
    voiting: VoitingType,
}

export type FoulsOperator = 'increment' | 'decrement'