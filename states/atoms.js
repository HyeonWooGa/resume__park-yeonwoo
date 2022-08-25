import { atom } from "recoil";

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    if (typeof window !== "undefined") {
      const savedValue = localStorage.getItem(key);
      if (savedValue) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };

export const isEngState = atom({
  key: "isEng",
  default: false,
  effects: [localStorageEffect("isEng")],
});

export const isDarkState = atom({
  key: "isDark",
  default: false,
  effects: [localStorageEffect("isDark")],
});
