export type Melody = 'bell' | 'echo' | 'tuturu' | 'none'

export type MelodyContext = {
    melody: Melody,
    changeMelody: (sound: Melody) => void
}