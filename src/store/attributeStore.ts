import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IAttribute {
  name: string;
  type: string;
  id: number;
}

interface State {
  attributes: IAttribute[];
  addAttribute: () => void;
  deleteAttribute: (id: number) => void;
  updateAttribute: (attr) => void;
}


export const useAttributeStore = create<State>()(
  devtools((set, get) => ({
    attributes: [],

    addAttribute: () =>
      set((state) => ({
        attributes: [
          ...state.attributes,
          { name: "", type: "", id: Date.now() },
        ],
      })),

    deleteAttribute: (id) =>
      set((state) => ({
        attributes: state.attributes.filter((attr) => attr.id !== id),
      })),

    updateAttribute: (attr) => {
      set(() => ({
        attributes: attr.filter((at) => at.type && at.name)
        
      }));
      console.log(get().attributes)
    },
  }))
);
