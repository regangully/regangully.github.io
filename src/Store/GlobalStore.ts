import create from "zustand";

const useGlobalStore = create((set: any) => ({
  alternateBackground: false,
  enableAlternateBackground: () => set(() => ({ alternateBackground: true })),
  disableAlternateBackground: () => set(() => ({ alternateBackground: false })),
}));

export default useGlobalStore;
