import { Box, Text, Image, Flex, Heading } from "@chakra-ui/react";
import { PiHandWaving } from "react-icons/pi";
import { motion } from "framer-motion";
const src1 =
  "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/db7b7639-d7d3-4d51-bbb2-0f345e636800/public";

import { GiPointing } from "react-icons/gi";
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
function HomePage() {
  return (
    <>
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
              I used React and several component Libraries to construct this. I
              enjoy doing web development in my spare time.
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
        <a
          href="https://www.instagram.com/lucassimpson33/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiInstagram className="mr-5" size={"40"} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100005845240530"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiFacebook className="mr-5" size={"40"} />
        </a>
        <a
          href="https://github.com/lucassimpson0213"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="mr-5" size={"40"} />
        </a>
      </Flex>
    </>
  );
}

export default HomePage;
