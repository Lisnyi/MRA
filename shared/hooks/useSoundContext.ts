import { useContext, createContext } from "react";
import type { MelodyContext } from "../../types";

export const SoundContext = createContext <MelodyContext>({} as MelodyContext);

export const useSoundContext = () => useContext(SoundContext);