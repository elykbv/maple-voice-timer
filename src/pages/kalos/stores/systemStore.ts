import { create } from "zustand";

type Store = {
  top: boolean;
  left: boolean;
  right: boolean;
  bottom: boolean;
  turnOnTop: () => void;
  turnOnLeft: () => void;
  turnOnRight: () => void;
  turnOnBottom: () => void;
  cleanseTop: () => void;
  cleanseLeft: () => void;
  cleanseRight: () => void;
  cleanseBottom: () => void;
};

const useSystemStore = create<Store>((set) => ({
  top: false,
  left: false,
  right: false,
  bottom: false,
  turnOnTop: () => set(() => ({ top: true })),
  turnOnLeft: () => set(() => ({ left: true })),
  turnOnRight: () => set(() => ({ right: true })),
  turnOnBottom: () => set(() => ({ bottom: true })),
  cleanseTop: () => set(() => ({ top: false })),
  cleanseLeft: () => set(() => ({ left: false })),
  cleanseRight: () => set(() => ({ right: false })),
  cleanseBottom: () => set(() => ({ bottom: false })),
}));

export default useSystemStore;
