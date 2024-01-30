// useModalControl.js
import { useModalStore } from "../hooks/useModalStore";

export const useModalControl = () => {
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const isOpen = useModalStore((state) => state.isOpen);

  return { openModal, closeModal, isOpen };
};
