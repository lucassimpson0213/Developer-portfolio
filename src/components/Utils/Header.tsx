import { Heading, Text, Flex, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface HeaderProps {
  body: string;
  header: string;
}

const MotionFlex = motion(Flex);

function Header({ body, header }: HeaderProps) {
  // Define motion variants for the fade-in effect
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }, // Customize duration as needed
    },
  };

  return (
    <MotionFlex
      direction={"column"}
      mt={10}
      mb={30}
      align="center"
      justify="center"
      w="100%"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Heading fontSize={60} fontFamily="adobe-garamond-pro">
        {header}
      </Heading>
      <Center>
        <Text fontFamily="adobe-garamond-pro" w="90" fontSize="xl">
          {body}
        </Text>
      </Center>
    </MotionFlex>
  );
}

export default Header;
