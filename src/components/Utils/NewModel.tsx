import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { useModalControl } from "../hooks/useModelControl"; // Ensure correct path
import { useRedirect } from "../hooks/useRedirect";

const src1 = " https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/54228e35-235c-44a1-f332-50f5515f4200/public"

interface ModelProps {
  ModelTitle: string;
  ModelText: string;
}

function NewModel({ ModelTitle, ModelText }: ModelProps) {
  const { isOpen, openModal, closeModal } = useModalControl();
  const redirectTo = useRedirect("/signup");

  const handleAction = () => {
    closeModal();
    redirectTo();
  };

  return (
    <>
      <Flex justify="center" align="center">
        <Avatar w={79} h={20} src={src1} onClick={openModal} />
      </Flex>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{ModelTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{ModelText}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
            <Button onClick={handleAction} variant="ghost">
              Redirect
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NewModel;
