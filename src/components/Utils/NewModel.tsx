import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { Avatar, Flex, Typography } from "antd";
import { useModalControl } from '../hooks/useModelControl'; // Ensure correct path
import { useRedirect } from "../hooks/useRedirect";

interface ModelProps {
  ModelTitle: string;
  ModelText: string;
}

function NewModel({ ModelTitle, ModelText }: ModelProps) {
  const { isOpen, openModal, closeModal } = useModalControl();
  const redirectTo = useRedirect('/signup');

  const handleAction = () => {
    closeModal(); // Corrected to use closeModal
    redirectTo();
  };

  return (
    <>
      <Flex justify="center" align="center">
        <Avatar size={70} onClick={openModal}> 
          LS
        </Avatar>
      </Flex>
      <Modal isOpen={isOpen} onClose={closeModal}> 
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{ModelTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Typography.Text>{ModelText}</Typography.Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}> 
              Close
            </Button>
            <Button onClick={handleAction} variant="ghost">Redirect</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NewModel;



