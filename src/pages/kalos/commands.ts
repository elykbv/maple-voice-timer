import useSystemStore from "./stores/systemStore";

export const commands = [
  {
    command: "Timer Left System",
    callback: () => useSystemStore.getState().turnOnLeft(),
  },
  {
    command: "Timer Right System",
    callback: () => useSystemStore.getState().turnOnRight(),
  },
  {
    command: "Timer Top System",
    callback: () => useSystemStore.getState().turnOnTop(),
  },
  {
    command: "Timer Bottom System",
    callback: () => useSystemStore.getState().turnOnBottom(),
  },
  {
    command: "Timer Left Cleansed",
    callback: () => useSystemStore.getState().cleanseLeft(),
  },
  {
    command: "Timer Right Cleansed",
    callback: () => useSystemStore.getState().cleanseRight(),
  },
];
