import { create } from 'zustand';

import { TMerchCatalogue } from '@/types/entities/merch';

export type useMerchStoreType = {
  modalIsOpen: boolean;
  merchCatalogue: TMerchCatalogue[];
  insertMerch: (data: TMerchCatalogue) => void;
  removeMerch: (id: string) => void;
  addOneMerch: (id: string) => void;
  minusOneMerch: (id: string) => void;
  setModalOpen: () => void;
  setModalClose: () => void;
};

const useMerchStore = create<useMerchStoreType>((set) => ({
  modalIsOpen: false,
  merchCatalogue: [],
  insertMerch: (data) =>
    set((state) => {
      const index = state.merchCatalogue.findIndex(
        (item) => item.id === data.id
      );
      if (index !== -1) {
        const updatedMerch = [...state.merchCatalogue];
        const existingMerch = updatedMerch[index];

        updatedMerch[index] = {
          ...existingMerch,
          total: existingMerch.total + 1,
        };

        return { merchCatalogue: updatedMerch };
      } else {
        return {
          merchCatalogue: [...state.merchCatalogue, { ...data, total: 1 }],
        };
      }
    }),
  removeMerch: (id) =>
    set((state) => ({
      merchCatalogue: state.merchCatalogue.filter((item) => item.id !== id),
    })),
  addOneMerch: (id) =>
    set((state) => {
      const index = state.merchCatalogue.findIndex((item) => item.id === id);

      const updatedMerch = [...state.merchCatalogue];
      const existingMerch = updatedMerch[index];

      updatedMerch[index] = {
        ...existingMerch,
        total: existingMerch.total + 1,
      };

      return { merchCatalogue: updatedMerch };
    }),
  minusOneMerch: (id) =>
    set((state) => {
      const index = state.merchCatalogue.findIndex((item) => item.id === id);

      const updatedMerch = [...state.merchCatalogue];
      const existingMerch = updatedMerch[index];

      if (existingMerch.total > 1) {
        updatedMerch[index] = {
          ...existingMerch,
          total: existingMerch.total - 1,
        };
      } else {
        updatedMerch.splice(index, 1);
      }

      return { merchCatalogue: updatedMerch };
    }),
  setModalOpen: () => set({ modalIsOpen: true }),
  setModalClose: () => set({ modalIsOpen: false }),
}));

export default useMerchStore;
