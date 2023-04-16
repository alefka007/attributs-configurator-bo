import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IAttribute {
  name: string;
  type: string;
  id: number | string;
  disabled: boolean;
  checked: boolean;
}

interface State {
  attributes: IAttribute[];

}

interface Actions {
  addAttribute: () => void;
  deleteAttribute: (id: number) => void;
  updateAttribute: (attributes) => void;
  copyAttribute: (id: number) => void;
  updateChecked: (id: number) => void;
}


export const useAttributeStore = create<State & Actions>()(
  devtools((set, get) => ({
    attributes: [{ id: 'required', name: 'Имя', type: 'Строка', disabled: true, checked: true }],

    addAttribute: () =>
      set((state) => ({
        attributes: [
          ...state.attributes,
          { name: "", type: "", id: Date.now(), disabled: false, checked: false },
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
    copyAttribute: (id) => set((state) => ({

    })),
    updateChecked: (id) => set((state) => ({
      attributes: state.attributes.filter(
        attribute => attribute.id === id &&
          [...state.attributes, { ...attribute, checked: !attribute.checked }]
      )
    })),
  }))
  );
