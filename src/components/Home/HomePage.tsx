import { Icon, Box, Text, Image, Flex } from "@chakra-ui/react";
import { PiHandWaving } from "react-icons/pi";
import { motion } from "framer-motion";
import krystal from "../../assets/IMG_4282-min.jpeg";

function HomePage() {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={contentVariants}
        layout
      >
        <Flex w="100%" justify="center" align="center" padding="4">
          <Box textAlign="center" marginTop="4rem" width="30%">
            <div>
              <Text
                fontFamily={"adobe-garamond-pro"}
                fontSize="2xl"
                marginBottom="1rem"
              >
                <Icon as={PiHandWaving} ml={5} w={6} h={6} /> Hi there, I'm{" "}
                <strong>Lucas</strong>
              </Text>
              <Text fontFamily={"adobe-garamond-pro"} fontSize="xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </Text>
            </div>
          </Box>
          <Image
            ml={10}
            borderRadius="full"
            boxSize="120px"
            src={image}
            alt="Lucas in his bedroom"
          />
        </Flex>
      </motion.div>
    </>
  );
}

export default HomePage;
