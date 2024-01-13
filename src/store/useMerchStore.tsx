import { create } from 'zustand';

import { TMerchCatalogue } from '@/types/entities/merch';

export type useMerchStoreType = {
  modalIsOpen: boolean;
  merchCatalogue: TMerchCatalogue[];
  insertMerch: (data: TMerchCatalogue, size?: string) => void;
  removeMerch: (id: string, size?: string) => void;
  addOneMerch: (id: string, size?: string) => void;
  minusOneMerch: (id: string, size?: string) => void;
  clearMerchCatalogueStorage: () => void;
  setModalOpen: () => void;
  setModalClose: () => void;
};

const useMerchStore = create<useMerchStoreType>((set) => {
  let initialMerchCatalogue = [];
  if (typeof window !== 'undefined') {
    const localMerchData = localStorage.getItem('merchCatalogue');
    initialMerchCatalogue = localMerchData ? JSON.parse(localMerchData) : [];
  }
  return {
    modalIsOpen: false,
    merchCatalogue: initialMerchCatalogue,
    insertMerch: (data, size) =>
      set((state) => {
        const existingIndex = state.merchCatalogue.findIndex(
          (item) => item.id === data.id && item.size === size
        );
        if (existingIndex !== -1) {
          const updatedMerch = [...state.merchCatalogue];
          updatedMerch[existingIndex] = {
            ...updatedMerch[existingIndex],
            total: updatedMerch[existingIndex].total + 1,
          };
          return { merchCatalogue: updatedMerch };
        } else {
          const newMerch = { ...data, total: 1, size: size };
          return {
            merchCatalogue: [...state.merchCatalogue, newMerch],
          };
        }
      }),
    removeMerch: (id, size) =>
      set((state) => ({
        merchCatalogue: state.merchCatalogue.filter((item) => {
          if (size !== undefined) {
            return !(item.id === id && item.size === size);
          }
          return !(item.id === id && item.size === undefined);
        }),
      })),
    addOneMerch: (id, size) =>
      set((state) => {
        const index = state.merchCatalogue.findIndex(
          (item) =>
            item.id === id &&
            (size === undefined ? !item.size : item.size === size)
        );
        if (index !== -1) {
          const updatedMerch = [...state.merchCatalogue];
          updatedMerch[index] = {
            ...updatedMerch[index],
            total: updatedMerch[index].total + 1,
          };
          return { merchCatalogue: updatedMerch };
        }
        return state;
      }),
    minusOneMerch: (id, size) =>
      set((state) => {
        const index = state.merchCatalogue.findIndex(
          (item) =>
            item.id === id &&
            (size === undefined ? !item.size : item.size === size)
        );
        if (index !== -1) {
          const updatedMerch = [...state.merchCatalogue];
          if (updatedMerch[index].total > 1) {
            updatedMerch[index] = {
              ...updatedMerch[index],
              total: updatedMerch[index].total - 1,
            };
          } else {
            updatedMerch.splice(index, 1);
          }
          return { merchCatalogue: updatedMerch };
        }
        return state;
      }),
    clearMerchCatalogueStorage: () => {
      localStorage.removeItem('merchCatalogue');
      set({ merchCatalogue: [] });
    },
    setModalOpen: () => set({ modalIsOpen: true }),
    setModalClose: () => set({ modalIsOpen: false }),
  };
});

if (typeof window !== 'undefined') {
  let prevState = useMerchStore.getState().merchCatalogue;

  useMerchStore.subscribe((state) => {
    if (JSON.stringify(state.merchCatalogue) !== JSON.stringify(prevState)) {
      localStorage.setItem(
        'merchCatalogue',
        JSON.stringify(state.merchCatalogue)
      );
      prevState = state.merchCatalogue;
    }
  });
}

export default useMerchStore;
