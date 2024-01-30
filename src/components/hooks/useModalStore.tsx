import create from "zustand";

// Define the interface for the modal's state and actions
interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// Create the store using the defined interface
export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
