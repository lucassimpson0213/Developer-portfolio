import React from "react";
import {
  Image,
  Text,
  VStack,
  Heading,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useBreakpointValue,
} from "@chakra-ui/react";

interface BlogProps {
  name: string;
  body: string;
  date: Date;
  image: string;
}

const Blog: React.FC<BlogProps> = ({ name, body, date, image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const imageSize = useBreakpointValue({ base: "100%", md: "80%", lg: "60%" });
  const headingSize = useBreakpointValue({ base: "md", md: "lg" });
  const textFontSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <VStack spacing={4} align="start" p={5} boxShadow="xl" rounded="lg">
      <Image src={image} alt={name} w={imageSize} borderRadius="md" />
      <Heading size={headingSize}>{name}</Heading>
      <Text fontSize="xs">{date.toLocaleDateString()}</Text>
      <Text fontSize={textFontSize} noOfLines={[3, 4]}>
        {body}
      </Text>
      <Button colorScheme="blue" onClick={onOpen}>
        Read More
      </Button>

      {/* Modal for full blog post */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} alt={name} mb={4} borderRadius="md" />
            <Text>{body}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default Blog;
