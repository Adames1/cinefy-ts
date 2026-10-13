import { create } from "zustand"

type BackgroundState = {
    backdrops: (string | null)[]
    activeIndex: number
    setBackdrops: (backdrops: (string | null)[]) => void
    setActiveIndex: (index: number) => void
    clear: () => void
}

export const useBackgroundStore = create<BackgroundState>((set) => ({
    backdrops: [],
    activeIndex: 0,
    setBackdrops: (backdrops) => set({ backdrops }),
    setActiveIndex: (activeIndex) => set({ activeIndex }),
    clear: () => set({ backdrops: [], activeIndex: 0 }),
}))