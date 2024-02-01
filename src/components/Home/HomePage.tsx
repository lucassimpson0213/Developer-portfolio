import { Box, Text, Image, Flex, Heading } from "@chakra-ui/react";
import { PiHandWaving } from "react-icons/pi";
import { motion } from "framer-motion";
const src1 = "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/12dce5b8-428f-4299-aefd-f6356359d500/public"

import { GiPointing } from "react-icons/gi";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";

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
        <Flex w="100%" alignItems="center" justify="center">
          <Box
            alignContent={"center"}
            textAlign="center"
            marginTop="4rem"
            width="30%"
          >
            <div>
              <Heading
                fontFamily={"adobe-garamond-pro"}
                fontSize="3xl"
                marginBottom="1rem"
              >
                <PiHandWaving size={60} />
                Hi there, I'm Lucas!
              </Heading>
              <Text fontFamily={"adobe-garamond-pro"} mb={3}>
                This is my webpage! I am a junior at Illinois state university!{" "}
              </Text>
              <Text fontFamily={"adobe-garamond-pro"}>
                I study Computer Science and I have an internship with GrowMark
                for Summer 2024
              </Text>
              <Text>
                <div></div>
              </Text>
              <Text fontFamily={"adobe-garamond-pro"}>
                I used React and several component Libraries to construct this.
                I enjoy doing web development in my spare time.
              </Text>
              <Text fontFamily={"adobe-garamond-pro"}>
                Check out this project on github. My socials are linked below
              </Text>{" "}
              <GiPointing size={40} />
            </div>
          </Box>
          <Image
            ml={10}
            borderRadius="full"
            boxSize="120px"
            src={src1}
            alt="My girlfriend krystal and I"
          />
        </Flex>

        <Flex
          mt={20}
          w={"91vw"}
          justify={"center"}
          align={"center"}
          direction={"row"}
        >
          <CiInstagram className="mr-5" size={"40"}>
            <a href="https://www.instagram.com/lucassimpson33/"></a>
          </CiInstagram>
          <CiFacebook className="mr-5" size={"40"}>
            <a href="https://www.facebook.com/profile.php?id=100005845240530"></a>
          </CiFacebook>
          <FaGithub className="mr-5" size={"40"}>
            <a href="https://github.com/lucassimpson0213"></a>
          </FaGithub>
        </Flex>
      </motion.div>
    </>
  );
}

export default HomePage;
