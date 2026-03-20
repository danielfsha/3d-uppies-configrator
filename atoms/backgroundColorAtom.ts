import { create } from 'zustand';

interface ColorState {
  hsva: { h: number; s: number; v: number; a: number };
  setHsva: (hsva: { h: number; s: number; v: number; a: number }) => void;
}

export const useColorStore = create<ColorState>((set) => ({
  hsva: { h: 214, s: 43, v: 100, a: 1 },
  setHsva: (hsva) => set({ hsva }),
}));
