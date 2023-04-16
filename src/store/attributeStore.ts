import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IAttribute {
  name: string;
  type: string;
  id: number | string;
  disabled: boolean;
}

interface State {
  attributes: IAttribute[];
  addAttribute: () => void;
  deleteAttribute: (id: number) => void;
  updateAttribute: (attributes) => void;
}


export const useAttributeStore = create<State>()(
  devtools((set, get) => ({
    attributes: [{ id: 'required', name: 'Имя', type: 'Строка', disabled: true }],

    addAttribute: () =>
      set((state) => ({
        attributes: [
          ...state.attributes,
          { name: "", type: "", id: Date.now(), disabled: false },
        ],
      })),

    deleteAttribute: (id) =>
      set((state) => ({
        attributes: state.attributes.filter((a) => a.id !== id)
      })),

    updateAttribute: (attributes) => {
      set(() => ({
        attributes: attributes.filter((a) => a.type && a.name)

      }));
      console.log(get().attributes)
    },
  }))
);
